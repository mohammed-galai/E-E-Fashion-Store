/**
 * JLALB Wishlist Manager
 * Handles wishlist state, badge count, heart toggles, and localStorage persistence
 */

class JLALB_WishlistManager {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("jlalb_wishlist")) || [];
    this.init();
  }

  init() {
    this.updateBadges();
  }

  toggle(productId) {
    const index = this.items.indexOf(productId);
    let added = false;

    if (index > -1) {
      this.items.splice(index, 1);
      added = false;
    } else {
      this.items.push(productId);
      added = true;
    }

    localStorage.setItem("jlalb_wishlist", JSON.stringify(this.items));
    this.updateBadges();
    this.updateHeartIcons(productId, added);

    const product = (window.JLALB_PRODUCTS || []).find(p => p.id === productId);
    const title = product ? (window.i18n.currentLang === 'fr' ? product.name_fr : (window.i18n.currentLang === 'ar' ? product.name_ar : product.name)) : "Item";

    if (window.showToast) {
      if (added) {
        window.showToast(`${title} added to your wishlist`, "heart");
      } else {
        window.showToast(`${title} removed from wishlist`, "info");
      }
    }

    window.dispatchEvent(new CustomEvent("wishlistUpdated", { detail: { items: this.items, added, productId } }));
    return added;
  }

  has(productId) {
    return this.items.includes(productId);
  }

  updateBadges() {
    const badges = document.querySelectorAll(".wishlist-badge-count");
    badges.forEach(b => {
      b.textContent = this.items.length;
      b.style.display = this.items.length > 0 ? "inline-flex" : "none";
    });
  }

  updateHeartIcons(productId, isWishlisted) {
    const hearts = document.querySelectorAll(`[data-wishlist-id="${productId}"]`);
    hearts.forEach(btn => {
      if (isWishlisted) {
        btn.classList.add("active");
        btn.setAttribute("aria-label", "Remove from wishlist");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-label", "Add to wishlist");
      }
    });
  }
}

window.wishlistManager = new JLALB_WishlistManager();
