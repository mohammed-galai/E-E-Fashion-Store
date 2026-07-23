/**
 * JLALB / E&E FASHION STORE Shopping Bag & WhatsApp Checkout Engine
 * Manages bag state, drawer UI, city shipping options, and instant WhatsApp ordering
 * Phone: +212720691741 | Insta: @elyasmine_brand
 */

class JLALB_CartManager {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem("jlalb_cart")) || [];
    this.selectedCity = localStorage.getItem("jlalb_city") || "agadir"; // agadir | other
    this.appliedDiscount = 0;
    this.whatsappNumber = "212720691741"; // Official WhatsApp Concierge
    this.init();
  }

  init() {
    this.updateBadges();
    this.bindEvents();
  }

  setCity(city) {
    this.selectedCity = city;
    localStorage.setItem("jlalb_city", city);
    this.renderDrawer();
    this.renderCartPage();
  }

  getShippingCost() {
    // Agadir = Free (0 DH), Other cities = +50 DH
    return this.selectedCity === "agadir" ? 0 : 50;
  }

  getShippingText() {
    const lang = window.i18n ? window.i18n.currentLang : 'en';
    if (this.selectedCity === "agadir") {
      return lang === 'fr' ? 'Livraison Gratuite (Agadir)' : (lang === 'ar' ? 'توصيل مجاني (أكادير)' : 'Free Shipping (Agadir)');
    } else {
      return lang === 'fr' ? '+50 DH (Autres Villes)' : (lang === 'ar' ? '+50 درهم (المدن الأخرى)' : '+50 DH (Other Cities)');
    }
  }

  addItem(productId, quantity = 1, size = "M", color = null) {
    const product = (window.JLALB_PRODUCTS || []).find(p => p.id === productId);
    if (!product) return;

    const chosenColor = color || (product.colors && product.colors[0] ? product.colors[0].name : "Standard");
    const chosenSize = size || (product.sizes ? product.sizes[0] : "Standard");

    const existingIndex = this.cart.findIndex(
      item => item.productId === productId && item.size === chosenSize && item.color === chosenColor
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        productId,
        quantity,
        size: chosenSize,
        color: chosenColor,
        addedAt: new Date().toISOString()
      });
    }

    this.save();
    this.updateBadges();
    this.renderDrawer();
    this.openDrawer();

    const title = window.i18n ? (window.i18n.currentLang === 'fr' ? product.name_fr : (window.i18n.currentLang === 'ar' ? product.name_ar : product.name)) : product.name;
    if (window.showToast) {
      window.showToast(`${title} (${chosenSize}) added to your bag`, "bag");
    }
  }

  updateQuantity(index, newQty) {
    if (newQty <= 0) {
      this.removeItem(index);
    } else {
      this.cart[index].quantity = newQty;
      this.save();
      this.updateBadges();
      this.renderDrawer();
      this.renderCartPage();
    }
  }

  removeItem(index) {
    this.cart.splice(index, 1);
    this.save();
    this.updateBadges();
    this.renderDrawer();
    this.renderCartPage();
    if (window.showToast) {
      window.showToast("Item removed from your bag", "info");
    }
  }

  applyPromoCode(code) {
    const cleanCode = (code || "").trim().toUpperCase();
    if (cleanCode === "AGADIR" || cleanCode === "ELYASMINE" || cleanCode === "JLALB10") {
      this.appliedDiscount = 0.10; // 10% off
      if (window.showToast) window.showToast("10% E&E discount applied!", "check");
      this.renderDrawer();
      this.renderCartPage();
      return true;
    } else {
      if (window.showToast) window.showToast("Invalid promotion code", "error");
      return false;
    }
  }

  getSubtotal() {
    return this.cart.reduce((sum, item) => {
      const product = (window.JLALB_PRODUCTS || []).find(p => p.id === item.productId);
      return sum + (product ? product.price_mad * item.quantity : 0);
    }, 0);
  }

  getDiscountAmount() {
    const subtotal = this.getSubtotal();
    if (this.appliedDiscount < 1) {
      return subtotal * this.appliedDiscount;
    }
    return Math.min(subtotal, this.appliedDiscount);
  }

  getTotal() {
    const subtotal = this.getSubtotal();
    const discount = this.getDiscountAmount();
    const shipping = this.getShippingCost();
    return Math.max(0, subtotal - discount + shipping);
  }

  save() {
    localStorage.setItem("jlalb_cart", JSON.stringify(this.cart));
  }

  updateBadges() {
    const count = this.cart.reduce((total, item) => total + item.quantity, 0);
    const badges = document.querySelectorAll(".cart-badge-count");
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? "inline-flex" : "none";
    });
  }

  openDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    if (drawer && overlay) {
      drawer.classList.add("open");
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }

  closeDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    if (drawer && overlay) {
      drawer.classList.remove("open");
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  renderDrawer() {
    const container = document.getElementById("cart-drawer-items");
    const subtotalEl = document.getElementById("cart-drawer-subtotal");
    const shippingEl = document.getElementById("cart-drawer-shipping");
    const totalEl = document.getElementById("cart-drawer-total");
    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = `
        <div class="empty-cart-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <p data-i18n="cart_empty">Your shopping bag is currently empty</p>
          <a href="collection.html" class="btn btn-outline" onclick="window.cartManager.closeDrawer()">Explore Creations</a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = "0 DH";
      if (totalEl) totalEl.textContent = "0 DH";
      return;
    }

    const lang = window.i18n ? window.i18n.currentLang : 'en';

    container.innerHTML = this.cart.map((item, index) => {
      const product = (window.JLALB_PRODUCTS || []).find(p => p.id === item.productId);
      if (!product) return "";

      const name = lang === 'fr' ? product.name_fr : (lang === 'ar' ? product.name_ar : product.name);
      const image = product.images && product.images[0] ? product.images[0] : "assets/images/women_royal.png";

      return `
        <div class="cart-item-card">
          <div class="cart-item-img">
            <img src="${image}" alt="${name}">
          </div>
          <div class="cart-item-info">
            <h4 class="cart-item-title">${name}</h4>
            <div class="cart-item-meta">
              <span>Size: ${item.size}</span> | <span>Color: ${item.color}</span>
            </div>
            <div class="cart-item-price">${product.price_mad} DH</div>
            <div class="cart-item-actions">
              <div class="qty-selector">
                <button type="button" onclick="window.cartManager.updateQuantity(${index}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button type="button" onclick="window.cartManager.updateQuantity(${index}, ${item.quantity + 1})">+</button>
              </div>
              <button type="button" class="remove-btn" onclick="window.cartManager.removeItem(${index})">Remove</button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Add City Shipping Selector into drawer
    container.innerHTML += `
      <div style="margin-top: 16px; padding: 16px; background: var(--bg-subtle); border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
        <label style="display: block; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; margin-bottom: 6px;">📍 Ville de livraison / مدينة التوصيل:</label>
        <select onchange="window.cartManager.setCity(this.value)" style="width: 100%; padding: 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); background: var(--bg-surface); font-family: inherit; font-size: 0.85rem;">
          <option value="agadir" ${this.selectedCity === 'agadir' ? 'selected' : ''}>Agadir (Livraison GRATUITE / مجاني)</option>
          <option value="other" ${this.selectedCity === 'other' ? 'selected' : ''}>Autre Ville au Maroc (+50 DH)</option>
        </select>
      </div>
    `;

    if (subtotalEl) subtotalEl.textContent = `${this.getSubtotal().toLocaleString()} DH`;
    if (shippingEl) shippingEl.textContent = this.getShippingText();
    if (totalEl) totalEl.textContent = `${this.getTotal().toLocaleString()} DH`;
  }

  renderCartPage() {
    const pageContainer = document.getElementById("full-cart-items");
    if (!pageContainer) return;

    if (this.cart.length === 0) {
      pageContainer.innerHTML = `
        <div class="empty-cart-page-state" style="padding: 40px; text-align: center;">
          <p>Your bag is currently empty.</p>
          <a href="collection.html" class="btn btn-primary" style="margin-top: 16px;">Browse The Collection</a>
        </div>
      `;
      const summaryBox = document.getElementById("cart-summary-box");
      if (summaryBox) summaryBox.style.display = "none";
      return;
    }

    const summaryBox = document.getElementById("cart-summary-box");
    if (summaryBox) summaryBox.style.display = "block";

    const lang = window.i18n ? window.i18n.currentLang : 'en';

    pageContainer.innerHTML = this.cart.map((item, index) => {
      const product = (window.JLALB_PRODUCTS || []).find(p => p.id === item.productId);
      if (!product) return "";

      const name = lang === 'fr' ? product.name_fr : (lang === 'ar' ? product.name_ar : product.name);
      const subtitle = lang === 'fr' ? product.subtitle_fr : (lang === 'ar' ? product.subtitle_ar : product.subtitle);
      const image = product.images && product.images[0] ? product.images[0] : "assets/images/women_royal.png";

      return `
        <tr class="cart-table-row">
          <td class="cart-table-prod">
            <img src="${image}" alt="${name}" class="cart-table-img">
            <div>
              <h3 class="cart-table-title">${name}</h3>
              <p class="cart-table-subtitle">${subtitle}</p>
              <div class="cart-table-spec">Size: ${item.size} | Color: ${item.color}</div>
            </div>
          </td>
          <td class="cart-table-price">${product.price_mad} DH</td>
          <td class="cart-table-qty">
            <div class="qty-selector">
              <button type="button" onclick="window.cartManager.updateQuantity(${index}, ${item.quantity - 1})">-</button>
              <span>${item.quantity}</span>
              <button type="button" onclick="window.cartManager.updateQuantity(${index}, ${item.quantity + 1})">+</button>
            </div>
          </td>
          <td class="cart-table-total">${(product.price_mad * item.quantity).toLocaleString()} DH</td>
          <td class="cart-table-remove">
            <button type="button" class="icon-btn-text" onclick="window.cartManager.removeItem(${index})">&times;</button>
          </td>
        </tr>
      `;
    }).join("");

    const subtotalEl = document.getElementById("cart-page-subtotal");
    const discountEl = document.getElementById("cart-page-discount");
    const shippingEl = document.getElementById("cart-page-shipping");
    const totalEl = document.getElementById("cart-page-total");

    if (subtotalEl) subtotalEl.textContent = `${this.getSubtotal().toLocaleString()} DH`;
    if (discountEl) discountEl.textContent = `-${this.getDiscountAmount().toLocaleString()} DH`;
    if (shippingEl) shippingEl.textContent = this.getShippingText();
    if (totalEl) totalEl.textContent = `${this.getTotal().toLocaleString()} DH`;
  }

  generateWhatsAppOrderURL(singleProduct = null, singleSize = null, singleColor = null) {
    let text = "";
    const cityName = this.selectedCity === "agadir" ? "Agadir (Livraison GRATUITE)" : "Autre Ville (+50 DH)";

    if (singleProduct) {
      const name = singleProduct.name;
      const price = singleProduct.price_mad;
      text = `السلام عليكم دار E&E Fashion Store (@elyasmine_brand)،\n\nأود طلب القطعة التالية:\n- ${name} (المقاس: ${singleSize || 'Standard'}, اللون: ${singleColor || 'Standard'}) - ${price} DH\n\n📍 مدينة التوصيل: ${cityName}\n\nالمرجو تأكيد الجاهزية والتفاصيل وشكراً.`;
    } else {
      if (this.cart.length === 0) {
        alert("Your shopping bag is empty");
        return null;
      }
      text = `السلام عليكم دار E&E Fashion Store (@elyasmine_brand)،\n\nأود إتمام الطلب للقطع التالية:\n\n`;
      this.cart.forEach((item, idx) => {
        const prod = (window.JLALB_PRODUCTS || []).find(p => p.id === item.productId);
        if (prod) {
          text += `${idx + 1}. ${prod.name}\n   - المقاس: ${item.size} | اللون: ${item.color}\n   - الكمية: ${item.quantity} x ${prod.price_mad} DH = ${prod.price_mad * item.quantity} DH\n\n`;
        }
      });
      text += `المجموع الفرعي: ${this.getSubtotal().toLocaleString()} DH\n`;
      if (this.appliedDiscount > 0) {
        text += `الخصم المطبق: -${this.getDiscountAmount().toLocaleString()} DH\n`;
      }
      text += `📍 مدينة التوصيل: ${cityName}\n`;
      text += `المجموع الكلي: ${this.getTotal().toLocaleString()} DH\n\nالمرجو التواصل معي لتأكيد عنوان الشحن والدفع وشكراً.`;
    }

    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
  }

  checkoutViaWhatsApp(singleProduct = null, singleSize = null, singleColor = null) {
    const url = this.generateWhatsAppOrderURL(singleProduct, singleSize, singleColor);
    if (url) {
      window.open(url, "_blank");
    }
  }

  bindEvents() {
    document.addEventListener("click", (e) => {
      if (e.target.closest("#cart-drawer-trigger")) {
        this.openDrawer();
      } else if (e.target.closest("#cart-drawer-close") || e.target.closest("#cart-overlay")) {
        this.closeDrawer();
      } else if (e.target.closest("#whatsapp-checkout-drawer") || e.target.closest("#whatsapp-checkout-page")) {
        this.checkoutViaWhatsApp();
      }
    });

    document.addEventListener("submit", (e) => {
      if (e.target.id === "promo-form") {
        e.preventDefault();
        const input = e.target.querySelector("input[name='promo_code']");
        if (input) this.applyPromoCode(input.value);
      }
    });
  }
}

window.cartManager = new JLALB_CartManager();
