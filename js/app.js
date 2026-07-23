/**
 * E&E FASHION STORE Core App Script (@elyasmine_brand)
 * Navigation, product rendering, color image swapping, filters, animations
 * Price: 180 DH | Sizes: L & XL | Agadir Free Delivery (0 DH), Other Cities (+50 DH)
 */

document.addEventListener("DOMContentLoaded", () => {
  JLALB_App.init();
});

const JLALB_App = {
  init() {
    this.bindHeaderNav();
    this.initScrollAnimations();
    
    if (document.getElementById("homepage-hero")) {
      this.initHomepage();
    }
    if (document.getElementById("collection-page-grid")) {
      this.initCollectionPage();
    }
    if (document.getElementById("product-detail-page")) {
      this.initProductDetailPage();
    }
    if (document.getElementById("contact-page-form")) {
      this.initContactPage();
    }

    window.addEventListener("languageChanged", () => {
      this.refreshDynamicContent();
    });
  },

  bindHeaderNav() {
    const navbar = document.getElementById("main-header");
    if (navbar) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    }

    const mobileMenuTrigger = document.getElementById("mobile-menu-trigger");
    const mobileMenuDrawer = document.getElementById("mobile-menu-drawer");
    const mobileMenuClose = document.getElementById("mobile-menu-close");

    if (mobileMenuTrigger && mobileMenuDrawer) {
      mobileMenuTrigger.addEventListener("click", () => {
        mobileMenuDrawer.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    }
    if (mobileMenuClose && mobileMenuDrawer) {
      mobileMenuClose.addEventListener("click", () => {
        mobileMenuDrawer.classList.remove("open");
        document.body.style.overflow = "";
      });
    }
  },

  initScrollAnimations() {
    const animatedElements = document.querySelectorAll(".reveal-on-scroll");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      animatedElements.forEach(el => observer.observe(el));
    } else {
      animatedElements.forEach(el => el.classList.add("animated"));
    }
  },

  renderProductCard(product) {
    const lang = window.i18n ? window.i18n.currentLang : 'en';
    const name = lang === 'fr' ? product.name_fr : (lang === 'ar' ? product.name_ar : product.name);
    const subtitle = lang === 'fr' ? product.subtitle_fr : (lang === 'ar' ? product.subtitle_ar : product.subtitle);
    const isWishlisted = window.wishlistManager ? window.wishlistManager.has(product.id) : false;
    const primaryImg = product.images[0] || "assets/images/abaya_khaki.jpg";
    const secondaryImg = product.images[1] || primaryImg;

    return `
      <div class="product-card reveal-on-scroll" data-product-id="${product.id}">
        <div class="product-card-image-wrap">
          <span class="product-card-tag">${product.tag}</span>
          <button type="button" class="wishlist-heart-btn ${isWishlisted ? 'active' : ''}" data-wishlist-id="${product.id}" onclick="window.wishlistManager.toggle('${product.id}')" aria-label="Toggle Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </button>
          <a href="product-detail.html?id=${product.id}">
            <img src="${primaryImg}" alt="${name}" class="img-primary">
            <img src="${secondaryImg}" alt="${name} detail" class="img-hover">
          </a>
          <div class="product-card-actions">
            <button type="button" class="btn btn-card-quickview" onclick="window.modalManager.openQuickView('${product.id}')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              Quick View
            </button>
            <button type="button" class="btn btn-card-add" onclick="window.cartManager.addItem('${product.id}')">
              + Add to Bag
            </button>
          </div>
        </div>
        <div class="product-card-info">
          <div class="product-card-cat">${product.fabric}</div>
          <h3 class="product-card-title"><a href="product-detail.html?id=${product.id}">${name}</a></h3>
          <p class="product-card-subtitle">${subtitle}</p>
          
          <!-- Available Colors Swatches Preview -->
          <div style="display:flex; gap:6px; margin: 8px 0;">
            ${product.colors.map(c => `<span style="width:14px; height:14px; border-radius:50%; background-color:${c.hex}; border:1px solid #CCC;" title="${c.name}"></span>`).join('')}
          </div>

          <div class="product-card-footer">
            <div class="product-card-price">
              <span class="current-price" style="color: var(--accent-gold); font-size: 1.4rem; font-weight:700;">180 DH</span>
              ${product.original_price_mad ? `<span class="old-price">250 DH</span>` : ''}
            </div>
            <div class="product-card-rating">
              <span>★ ${product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  initHomepage() {
    const featuredGrid = document.getElementById("featured-creations-grid");
    const bestsellersGrid = document.getElementById("bestsellers-grid");

    if (featuredGrid && window.JLALB_PRODUCTS) {
      featuredGrid.innerHTML = window.JLALB_PRODUCTS.map(p => this.renderProductCard(p)).join("");
    }

    if (bestsellersGrid && window.JLALB_PRODUCTS) {
      bestsellersGrid.innerHTML = window.JLALB_PRODUCTS.map(p => this.renderProductCard(p)).join("");
    }
  },

  initCollectionPage() {
    const grid = document.getElementById("collection-page-grid");
    if (!grid || !window.JLALB_PRODUCTS) return;

    this.currentCategory = "all";
    this.currentSort = "featured";
    this.currentPriceMax = 500;

    this.filterAndRenderCollection();

    document.querySelectorAll(".cat-filter-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".cat-filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentCategory = btn.dataset.category;
        this.filterAndRenderCollection();
      });
    });

    const sortSelect = document.getElementById("sort-select");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.currentSort = e.target.value;
        this.filterAndRenderCollection();
      });
    }

    const priceSlider = document.getElementById("price-range-input");
    const priceDisplay = document.getElementById("price-range-val");
    if (priceSlider && priceDisplay) {
      priceSlider.addEventListener("input", (e) => {
        this.currentPriceMax = parseInt(e.target.value, 10);
        priceDisplay.textContent = `${this.currentPriceMax} DH`;
        this.filterAndRenderCollection();
      });
    }
  },

  filterAndRenderCollection() {
    const grid = document.getElementById("collection-page-grid");
    const countEl = document.getElementById("collection-item-count");
    if (!grid || !window.JLALB_PRODUCTS) return;

    let items = [...window.JLALB_PRODUCTS];

    if (countEl) countEl.textContent = items.length;

    grid.innerHTML = items.map(p => this.renderProductCard(p)).join("");
    this.initScrollAnimations();
  },

  initProductDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id") || "ee-abaya-butterfly-01";
    const product = (window.JLALB_PRODUCTS || []).find(p => p.id === productId) || window.JLALB_PRODUCTS[0];

    if (!product) return;

    const lang = window.i18n ? window.i18n.currentLang : 'en';
    const name = lang === 'fr' ? product.name_fr : (lang === 'ar' ? product.name_ar : product.name);
    const subtitle = lang === 'fr' ? product.subtitle_fr : (lang === 'ar' ? product.subtitle_ar : product.subtitle);
    const description = lang === 'fr' ? product.description_fr : (lang === 'ar' ? product.description_ar : product.description);

    const titleEl = document.getElementById("pd-title");
    const subtitleEl = document.getElementById("pd-subtitle");
    const tagEl = document.getElementById("pd-tag");
    const priceEl = document.getElementById("pd-price");
    const oldPriceEl = document.getElementById("pd-old-price");
    const ratingEl = document.getElementById("pd-rating");
    const fabricEl = document.getElementById("pd-fabric");
    const hoursEl = document.getElementById("pd-hours");
    const descEl = document.getElementById("pd-description");
    const mainImgEl = document.getElementById("pd-main-img");
    const thumbsWrap = document.getElementById("pd-thumbs-wrap");
    const colorSwatchesWrap = document.getElementById("pd-colors-wrap");
    const sizesWrap = document.getElementById("pd-sizes-wrap");

    if (titleEl) titleEl.textContent = name;
    if (subtitleEl) subtitleEl.textContent = subtitle;
    if (tagEl) tagEl.textContent = product.tag;
    if (priceEl) priceEl.textContent = "180 DH";
    if (oldPriceEl) oldPriceEl.textContent = "250 DH";
    if (ratingEl) ratingEl.textContent = `★ ${product.rating} (${product.reviews_count} Reviews)`;
    if (fabricEl) fabricEl.textContent = lang === 'fr' ? product.fabric_fr : (lang === 'ar' ? product.fabric_ar : product.fabric);
    if (hoursEl) hoursEl.textContent = lang === 'fr' ? product.artisan_hours_fr : (lang === 'ar' ? product.artisan_hours_ar : product.artisan_hours);
    if (descEl) descEl.textContent = description;

    if (mainImgEl) {
      mainImgEl.src = product.images[0];
      mainImgEl.alt = name;
      
      const zoomContainer = document.getElementById("pd-zoom-container");
      if (zoomContainer) {
        zoomContainer.addEventListener("mousemove", (e) => {
          const rect = zoomContainer.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          mainImgEl.style.transformOrigin = `${x}% ${y}%`;
          mainImgEl.style.transform = "scale(1.8)";
        });
        zoomContainer.addEventListener("mouseleave", () => {
          mainImgEl.style.transform = "scale(1)";
        });
      }
    }

    if (thumbsWrap) {
      thumbsWrap.innerHTML = product.images.map((img, idx) => `
        <img src="${img}" class="pd-thumb ${idx===0?'active':''}" onclick="document.getElementById('pd-main-img').src='${img}'; document.querySelectorAll('.pd-thumb').forEach(t=>t.classList.remove('active')); this.classList.add('active');">
      `).join("");
    }

    if (colorSwatchesWrap) {
      colorSwatchesWrap.innerHTML = product.colors.map((c, idx) => `
        <button type="button" class="color-swatch ${idx===0?'active':''}" style="background-color: ${c.hex}" title="${c.name}" data-color="${c.name}" data-img="${c.image}" onclick="
          document.querySelectorAll('#pd-colors-wrap .color-swatch').forEach(s=>s.classList.remove('active'));
          this.classList.add('active');
          document.getElementById('pd-main-img').src='${c.image}';
          document.querySelectorAll('.pd-thumb').forEach(t => { if(t.src.includes('${c.image}')) t.classList.add('active'); else t.classList.remove('active'); });
        "></button>
      `).join("");
    }

    if (sizesWrap) {
      sizesWrap.innerHTML = product.sizes.map((s, idx) => `
        <button type="button" class="size-btn ${idx===0?'active':''}" data-size="${s}" onclick="document.querySelectorAll('#pd-sizes-wrap .size-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active');">${s}</button>
      `).join("");
    }

    const addToCartBtn = document.getElementById("pd-add-to-cart-btn");
    const orderWhatsappBtn = document.getElementById("pd-whatsapp-btn");

    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", () => {
        const size = document.querySelector("#pd-sizes-wrap .size-btn.active")?.dataset.size || product.sizes[0];
        const color = document.querySelector("#pd-colors-wrap .color-swatch.active")?.dataset.color || product.colors[0].name;
        window.cartManager.addItem(product.id, 1, size, color);
      });
    }

    if (orderWhatsappBtn) {
      orderWhatsappBtn.addEventListener("click", () => {
        const size = document.querySelector("#pd-sizes-wrap .size-btn.active")?.dataset.size || product.sizes[0];
        const color = document.querySelector("#pd-colors-wrap .color-swatch.active")?.dataset.color || product.colors[0].name;
        window.cartManager.checkoutViaWhatsApp(product, size, color);
      });
    }

    const relatedGrid = document.getElementById("pd-related-grid");
    if (relatedGrid && window.JLALB_PRODUCTS) {
      relatedGrid.innerHTML = window.JLALB_PRODUCTS.map(p => this.renderProductCard(p)).join("");
    }
  },

  initContactPage() {
    const form = document.getElementById("contact-page-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending Request...";
      }

      setTimeout(() => {
        if (window.showToast) {
          window.showToast("Merci. Votre message a été envoyé vers notre WhatsApp (+212720691741).", "check");
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = window.i18n ? window.i18n.t("form_submit") : "Send Message";
        }
      }, 1000);
    });
  },

  refreshDynamicContent() {
    if (document.getElementById("homepage-hero")) this.initHomepage();
    if (document.getElementById("collection-page-grid")) this.filterAndRenderCollection();
    if (document.getElementById("product-detail-page")) this.initProductDetailPage();
  }
};

window.JLALB_App = JLALB_App;
