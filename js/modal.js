/**
 * E&E FASHION STORE Modal, Lightbox, Quick View & Toast System
 * Insta: @elyasmine_brand | WA: +212720691741 | Price: 180 DH
 */

window.showToast = function(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast-item toast-${type}`;
  
  let iconSvg = "";
  if (type === "heart") {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
  } else if (type === "bag" || type === "check") {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;
  } else {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
  }

  toast.innerHTML = `<span class="toast-icon">${iconSvg}</span><span class="toast-message">${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

class JLALB_ModalManager {
  constructor() {
    this.activeModal = null;
    this.init();
  }

  init() {
    this.bindEvents();
  }

  openQuickView(productId) {
    const product = (window.JLALB_PRODUCTS || []).find(p => p.id === productId);
    if (!product) return;

    const lang = window.i18n ? window.i18n.currentLang : 'en';
    const name = lang === 'fr' ? product.name_fr : (lang === 'ar' ? product.name_ar : product.name);
    const subtitle = lang === 'fr' ? product.subtitle_fr : (lang === 'ar' ? product.subtitle_ar : product.subtitle);
    const description = lang === 'fr' ? product.description_fr : (lang === 'ar' ? product.description_ar : product.description);

    let modal = document.getElementById("quickview-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "quickview-modal";
      modal.className = "modal-overlay";
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-card modal-quickview">
        <button class="modal-close" onclick="window.modalManager.closeModal()">&times;</button>
        <div class="quickview-grid">
          <div class="quickview-gallery">
            <div class="quickview-main-img-wrap">
              <img id="qv-main-image" src="${product.images[0]}" alt="${name}" onclick="window.modalManager.openLightbox(this.src)">
            </div>
            <div class="quickview-thumbs">
              ${product.images.map((img, i) => `
                <img src="${img}" class="qv-thumb ${i===0?'active':''}" onclick="document.getElementById('qv-main-image').src='${img}'; document.querySelectorAll('.qv-thumb').forEach(t=>t.classList.remove('active')); this.classList.add('active');">
              `).join('')}
            </div>
          </div>
          <div class="quickview-content">
            <div class="product-tag-pill">${product.tag}</div>
            <h2 class="quickview-title">${name}</h2>
            <p class="quickview-subtitle">${subtitle}</p>
            <div class="quickview-price-row">
              <span class="price-val" style="color: var(--accent-gold); font-weight:700; font-size:1.8rem;">180 DH</span>
              ${product.original_price_mad ? `<span class="price-old">250 DH</span>` : ''}
              <span class="rating-badge">★ ${product.rating} (${product.reviews_count} avis)</span>
            </div>
            <p class="quickview-desc">${description}</p>
            
            <div class="qv-option-group">
              <label class="qv-label">Fabric & Finishing:</label>
              <p class="qv-fabric-text">${lang === 'fr' ? product.fabric_fr : (lang === 'ar' ? product.fabric_ar : product.fabric)}</p>
            </div>

            <div class="qv-option-group">
              <label class="qv-label">Couleurs Disponibles (5 ألوان):</label>
              <div class="qv-color-swatches" style="display:flex; flex-wrap:wrap; gap:8px;">
                ${product.colors.map((c, i) => `
                  <button type="button" class="color-swatch ${i===0?'active':''}" style="background-color: ${c.hex}" title="${c.name}" data-color="${c.name}" data-img="${c.image}" onclick="
                    document.querySelectorAll('#quickview-modal .color-swatch').forEach(s=>s.classList.remove('active'));
                    this.classList.add('active');
                    document.getElementById('qv-main-image').src='${c.image}';
                    document.querySelectorAll('.qv-thumb').forEach(t => { if(t.src.includes('${c.image}')) t.classList.add('active'); else t.classList.remove('active'); });
                  "></button>
                `).join('')}
              </div>
            </div>

            <div class="qv-option-group">
              <div class="qv-label-row">
                <label class="qv-label">Tailles Disponibles (L & XL):</label>
                <button type="button" class="text-link-btn" onclick="window.modalManager.openSizeGuide()">Size Guide</button>
              </div>
              <div class="qv-size-picker">
                ${product.sizes.map((s, i) => `
                  <button type="button" class="size-btn ${i===0?'active':''}" data-size="${s}" onclick="document.querySelectorAll('#quickview-modal .size-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active');">${s}</button>
                `).join('')}
              </div>
            </div>

            <div class="qv-actions-row">
              <button type="button" class="btn btn-primary" onclick="
                const selectedSize = document.querySelector('#quickview-modal .size-btn.active')?.dataset.size || '${product.sizes[0]}';
                const selectedColor = document.querySelector('#quickview-modal .color-swatch.active')?.dataset.color || '${product.colors[0].name}';
                window.cartManager.addItem('${product.id}', 1, selectedSize, selectedColor);
                window.modalManager.closeModal();
              ">Add to Bag</button>
              
              <button type="button" class="btn btn-whatsapp" onclick="
                const selectedSize = document.querySelector('#quickview-modal .size-btn.active')?.dataset.size || '${product.sizes[0]}';
                const selectedColor = document.querySelector('#quickview-modal .color-swatch.active')?.dataset.color || '${product.colors[0].name}';
                window.cartManager.checkoutViaWhatsApp(window.JLALB_PRODUCTS.find(p=>p.id==='${product.id}'), selectedSize, selectedColor);
              ">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                Order WhatsApp (0720691741)
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  openLightbox(imageSrc) {
    let lightbox = document.getElementById("lightbox-modal");
    if (!lightbox) {
      lightbox = document.createElement("div");
      lightbox.id = "lightbox-modal";
      lightbox.className = "modal-overlay lightbox-overlay";
      document.body.appendChild(lightbox);
    }

    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="modal-close" onclick="window.modalManager.closeModal()">&times;</button>
        <img src="${imageSrc}" class="lightbox-img" alt="Zoomed view">
      </div>
    `;

    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  openSizeGuide() {
    let guide = document.getElementById("sizeguide-modal");
    if (!guide) {
      guide = document.createElement("div");
      guide.id = "sizeguide-modal";
      guide.className = "modal-overlay";
      document.body.appendChild(guide);
    }

    guide.innerHTML = `
      <div class="modal-card modal-medium">
        <button class="modal-close" onclick="window.modalManager.closeModal()">&times;</button>
        <h3 class="modal-title">E&E Fashion Store - دليل المقاسات (L & XL)</h3>
        <p class="modal-subtitle">نقوم بخياطة وتصميم العباية بقصة عريضة ومريحة لجميع المقاسات L و XL.</p>
        <div class="size-table-wrap">
          <table class="size-guide-table">
            <thead>
              <tr>
                <th>المقاس / Taille</th>
                <th>عرض الصدر (Chest)</th>
                <th>طول الأكمام (Sleeve)</th>
                <th>الطول الكلي (Total Length)</th>
                <th>الارتفاع المناسب (Height)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>L (Standard)</strong></td>
                <td>102 - 108 cm</td>
                <td>62 cm</td>
                <td>142 cm</td>
                <td>162 - 172 cm</td>
              </tr>
              <tr>
                <td><strong>XL (Grand Format)</strong></td>
                <td>110 - 118 cm</td>
                <td>64 cm</td>
                <td>146 cm</td>
                <td>170 - 180 cm</td>
              </tr>
              <tr>
                <td><strong>Sur Mesure / خياطة خاصة</strong></td>
                <td>Custom Fitted</td>
                <td>Custom Fitted</td>
                <td>Custom Fitted</td>
                <td>قياس شخصي عبر الواتساب</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;

    guide.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  openSearchOverlay() {
    let searchOverlay = document.getElementById("search-overlay");
    if (!searchOverlay) {
      searchOverlay = document.createElement("div");
      searchOverlay.id = "search-overlay";
      searchOverlay.className = "modal-overlay search-modal-overlay";
      document.body.appendChild(searchOverlay);
    }

    searchOverlay.innerHTML = `
      <div class="search-modal-card">
        <div class="search-header">
          <div class="search-input-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="live-search-input" placeholder="${window.i18n ? window.i18n.t('nav_search_placeholder') : 'Search Jellabas...'}" autofocus oninput="window.modalManager.handleSearchInput(this.value)">
          </div>
          <button class="modal-close" onclick="window.modalManager.closeModal()">&times;</button>
        </div>
        <div class="search-quick-tags">
          <span>Popular:</span>
          <button type="button" class="tag-pill" onclick="window.modalManager.searchTag('Khaki')">Vert Khaki</button>
          <button type="button" class="tag-pill" onclick="window.modalManager.searchTag('Bordeaux')">Bordeaux</button>
          <button type="button" class="tag-pill" onclick="window.modalManager.searchTag('Agadir')">180 DH Agadir</button>
        </div>
        <div id="search-results-list" class="search-results-grid"></div>
      </div>
    `;

    searchOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      const input = document.getElementById("live-search-input");
      if (input) input.focus();
      this.handleSearchInput("");
    }, 50);
  }

  searchTag(tag) {
    const input = document.getElementById("live-search-input");
    if (input) {
      input.value = tag;
      this.handleSearchInput(tag);
    }
  }

  handleSearchInput(query) {
    const container = document.getElementById("search-results-list");
    if (!container) return;

    const q = (query || "").toLowerCase().trim();
    const products = window.JLALB_PRODUCTS || [];

    const matches = products.filter(p => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.name_fr.toLowerCase().includes(q) ||
        p.name_ar.includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });

    if (matches.length === 0) {
      container.innerHTML = `<div class="no-search-results"><p>Aucun résultat pour "${query}".</p></div>`;
      return;
    }

    const lang = window.i18n ? window.i18n.currentLang : 'en';

    container.innerHTML = matches.map(product => {
      const name = lang === 'fr' ? product.name_fr : (lang === 'ar' ? product.name_ar : product.name);
      return `
        <div class="search-result-item" onclick="window.location.href='product-detail.html?id=${product.id}'">
          <img src="${product.images[0]}" alt="${name}">
          <div class="search-result-info">
            <h4 class="search-result-name">${name}</h4>
            <div class="search-result-category">Tailles: L & XL</div>
            <div class="search-result-price">180 DH</div>
          </div>
        </div>
      `;
    }).join("");
  }

  closeModal() {
    document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("open"));
    document.body.style.overflow = "";
  }

  bindEvents() {
    document.addEventListener("click", (e) => {
      if (e.target.closest("#search-trigger-btn") || e.target.closest(".header-search-input-fake")) {
        this.openSearchOverlay();
      } else if (e.target.classList.contains("modal-overlay")) {
        this.closeModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeModal();
      }
    });
  }
}

window.modalManager = new JLALB_ModalManager();
