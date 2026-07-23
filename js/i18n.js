/**
 * E&E FASHION STORE / JLALB Trilingual Dictionary & i18n Engine (EN, FR, AR)
 * Handles RTL switching, DOM text translation, Agadir & Morocco delivery info
 * Insta: @elyasmine_brand | WA: +212720691741
 */

const JLALB_I18N = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_collection: "Collection",
    nav_about: "Atelier & Story",
    nav_contact: "Contact & Insta",
    nav_cart: "Shopping Bag",
    nav_wishlist: "Wishlist",
    nav_search_placeholder: "Search Jellabas, Silks, Selhams...",
    
    // Hero Section
    hero_tag: "MAISON DE HAUTE COUTURE MAROCAINE",
    hero_title: "The Art of Moroccan Elegance",
    hero_subtitle: "High precision tailor-made Jellabas. Free delivery in Agadir & +50 DH other cities.",
    hero_cta: "Explore Collection",
    hero_cta_about: "Our Story",
    
    // Feature Highlights
    feat_1_title: "100% Hand-Braided Sfifa",
    feat_1_desc: "Crafted thread by thread by master Moroccan artisans",
    feat_2_title: "Premium Fabric Selection",
    feat_2_desc: "Ethically sourced cashmere wool & fine silks",
    feat_3_title: "High Precision Finishing",
    feat_3_desc: "Bespoke tailoring to your exact measurements",
    feat_4_title: "Free Delivery in Agadir",
    feat_4_desc: "+50 DH for all other cities in Morocco",

    // Section Titles
    sec_featured_title: "Curated Atelier Creations",
    sec_featured_subtitle: "Exquisite handmade Jellabas crafted for moments of distinction",
    sec_bestsellers_title: "Iconic Best Sellers",
    sec_bestsellers_subtitle: "Our most coveted signatures worn by connoisseurs worldwide",
    sec_craft_title: "The Anatomy of Moroccan Couture",
    sec_craft_subtitle: "Three centuries of preserved artisanal mastery",
    sec_testimonials_title: "Client Testimonials",
    sec_testimonials_subtitle: "Words from our global patrons and couture collectors",
    sec_insta_title: "@elyasmine_brand",
    sec_insta_subtitle: "Follow our Instagram profile for daily new arrivals",
    
    // Craftsmanship 3 Steps
    craft_1_title: "1. The Gold Sfifa Braid",
    craft_1_desc: "Centuries-old technique weaving fine silk and gold threads into an intricate protective border.",
    craft_2_title: "2. Hand-Knotted Aakad",
    craft_2_desc: "Over 100 individual silk buttons meticulously tied by hand to form the signature closure.",
    craft_3_title: "3. Precision Finishing",
    craft_3_desc: "Master tailoring ensuring fluid drape, graceful motion, and supreme comfort.",

    // Collection Page
    filter_all: "All Creations",
    filter_women: "Women's Collection",
    filter_men: "Men's Collection",
    filter_royal: "Royal Selhams",
    filter_bridal: "Bridal Couture",
    filter_fabric: "Fabric Type",
    filter_price: "Price Range",
    sort_by: "Sort By",
    sort_featured: "Featured",
    sort_price_low: "Price: Low to High",
    sort_price_high: "Price: High to Low",
    sort_rating: "Highest Rated",
    showing_results: "Showing creations",
    
    // Product Details
    quick_view: "Quick View",
    add_to_cart: "Add to Bag",
    order_whatsapp: "Order via WhatsApp (+212 720691741)",
    view_details: "View Details",
    size_label: "Select Size",
    size_guide: "Size & Measurement Guide",
    artisan_time: "Craftsmanship Time",
    fabric_spec: "Fabric Composition",
    reviews: "Reviews",
    in_stock: "In Stock - Ready to Ship",
    guarantee: "Free delivery in Agadir (+50 DH other cities)",

    // Cart & Checkout
    cart_title: "Your Shopping Bag",
    cart_empty: "Your shopping bag is currently empty",
    subtotal: "Subtotal",
    shipping: "Shipping",
    shipping_free: "Free in Agadir / +50 DH Morocco",
    total: "Total",
    checkout_whatsapp: "Checkout via WhatsApp (+212 720691741)",
    promo_placeholder: "Enter Promo Code",
    apply_promo: "Apply",

    // Contact & Atelier
    contact_title: "Connect with E&E Fashion Store",
    contact_subtitle: "Order on WhatsApp (+212720691741) or Instagram @elyasmine_brand",
    form_name: "Full Name",
    form_email: "Email Address",
    form_phone: "Phone / WhatsApp",
    form_boutique: "Select City / Topic",
    form_msg: "Your Message or Custom Order Request",
    form_submit: "Send Message",
    form_success: "Thank you. Our team will contact you shortly on WhatsApp.",

    // Footer
    footer_about: "E&E Fashion Store (@elyasmine_brand) is a Moroccan luxury brand crafting custom Jellabas with high precision, premium fabrics, and free delivery in Agadir.",
    footer_locations: "Contacts",
    footer_rights: "All Rights Reserved. E&E Fashion Store."
  },

  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_collection: "Collection",
    nav_about: "Atelier & Histoire",
    nav_contact: "Contact & Insta",
    nav_cart: "Mon Panier",
    nav_wishlist: "Favoris",
    nav_search_placeholder: "Rechercher Jellabas, Soies, Selhams...",
    
    // Hero Section
    hero_tag: "MAISON DE HAUTE COUTURE MAROCAINE",
    hero_title: "L'Art de l'Élégance Marocaine",
    hero_subtitle: "Couture haute précision sur mesure. Livraison gratuite à Agadir & +50 DH autres villes.",
    hero_cta: "Explorer la Collection",
    hero_cta_about: "Notre Histoire",
    
    // Feature Highlights
    feat_1_title: "100% Sfifa Tressée Main",
    feat_1_desc: "Tissée fil par fil par des artisans marocains",
    feat_2_title: "Sélection d'Étoffes Nobles",
    feat_2_desc: "Pure laine cachemire et soies fines",
    feat_3_title: "Finition Haute Précision",
    feat_3_desc: "Confection personnalisée à vos mesures",
    feat_4_title: "Livraison Gratuite à Agadir",
    feat_4_desc: "+50 DH pour toutes les autres villes du Maroc",

    // Section Titles
    sec_featured_title: "Créations de l'Atelier",
    sec_featured_subtitle: "Jellabas artisanales d'exception pour des moments de distinction",
    sec_bestsellers_title: "Best-Sellers Iconiques",
    sec_bestsellers_subtitle: "Nos pièces signatures les plus demandées",
    sec_craft_title: "L'Anatomie de la Couture Marocaine",
    sec_craft_subtitle: "Maîtrise artisanale et finition haute précision",
    sec_testimonials_title: "Témoignages Clients",
    sec_testimonials_subtitle: "Les avis de nos clientes et connaisseurs",
    sec_insta_title: "@elyasmine_brand",
    sec_insta_subtitle: "Suivez notre compte Instagram pour les nouveautés quotidiennes",
    
    // Craftsmanship 3 Steps
    craft_1_title: "1. La Tresse Sfifa d'Or",
    craft_1_desc: "Technique séculaire tissant la soie fine et le fil d'or en une bordure élégante.",
    craft_2_title: "2. Les Boutons Aakad Fais Main",
    craft_2_desc: "Plus de 100 boutons de soie noués minutieusement à la main.",
    craft_3_title: "3. Finition de Précision",
    craft_3_desc: "Coupe de maître assurant un drapé fluide et un confort ultime.",

    // Collection Page
    filter_all: "Toutes les Créations",
    filter_women: "Collection Femme",
    filter_men: "Collection Homme",
    filter_royal: "Selhams Royaux",
    filter_bridal: "Couture Nuptiale",
    filter_fabric: "Type de Tissu",
    filter_price: "Gamme de Prix",
    sort_by: "Trier Par",
    sort_featured: "En Vedette",
    sort_price_low: "Prix: Croissant",
    sort_price_high: "Prix: Décroissant",
    sort_rating: "Mieux Notés",
    showing_results: "Affichage des créations",

    // Product Details
    quick_view: "Aperçu Rapide",
    add_to_cart: "Ajouter au Panier",
    order_whatsapp: "Commander via WhatsApp (+212 720691741)",
    view_details: "Voir les Détails",
    size_label: "Sélectionner la Taille",
    size_guide: "Guide des Tailles",
    artisan_time: "Temps d'Artisanat",
    fabric_spec: "Composition du Tissu",
    reviews: "Avis",
    in_stock: "En Stock - Prêt à l'envoi",
    guarantee: "Livraison offerte à Agadir (+50 DH autres villes)",

    // Cart & Checkout
    cart_title: "Votre Panier",
    cart_empty: "Votre panier est actuellement vide",
    subtotal: "Sous-total",
    shipping: "Livraison",
    shipping_free: "Gratuite à Agadir / +50 DH Maroc",
    total: "Total",
    checkout_whatsapp: "Commander via WhatsApp (+212 720691741)",
    promo_placeholder: "Code Promo",
    apply_promo: "Appliquer",

    // Contact & Atelier
    contact_title: "Contacter E&E Fashion Store",
    contact_subtitle: "Commandez directement sur WhatsApp (+212720691741) ou Instagram @elyasmine_brand",
    form_name: "Nom Complet",
    form_email: "Adresse Email",
    form_phone: "Téléphone / WhatsApp",
    form_boutique: "Sélectionner Ville / Sujet",
    form_msg: "Votre Message ou Demande Sur-Mesure",
    form_submit: "Envoyer le Message",
    form_success: "Merci. Notre équipe prendra contact avec vous sur WhatsApp.",

    // Footer
    footer_about: "E&E Fashion Store (@elyasmine_brand) est une marque marocaine spécialisée dans la confection de jellabas sur mesure avec finition professionnelle et livraison offerte à Agadir.",
    footer_locations: "Contact",
    footer_rights: "Tous Droits Réservés. E&E Fashion Store."
  },

  ar: {
    // Navigation
    nav_home: "الرئيسية",
    nav_collection: "التشكيلة",
    nav_about: "قصتنا وحرفيتنا",
    nav_contact: "التواصل وإنستغرام",
    nav_cart: "حقيبة التسوق",
    nav_wishlist: "المفضلة",
    nav_search_placeholder: "إبحث عن الجلابيب، الحرير، السلهام...",
    
    // Hero Section
    hero_tag: "E&E FASHION STORE - خياطة جميع التصاميم بدقة عالية",
    hero_title: "فن الخياطة المغربية الرفيعة",
    hero_subtitle: "اختيار أقمشة ممتازة وتشطيب باحترافية. التوصيل بالمجان داخل أكادير والمدن الأخرى +50 درهم.",
    hero_cta: "إكتشف التشكيلة",
    hero_cta_about: "قصتنا",
    
    // Feature Highlights
    feat_1_title: "100% سفيفة مصنوعة يدوياً",
    feat_1_desc: "منسوجة خيطاً بخيط بأيدي صناع مغاربة",
    feat_2_title: "اختيار أقمشة ممتازة",
    feat_2_desc: "أجود أصواف الكشمير والحرير الصافي",
    feat_3_title: "تشطيب باحترافية عالية",
    feat_3_desc: "خياطة دقيقة مصممة خصيصاً على مقاسك",
    feat_4_title: "توصيل بالمجان داخل أكادير",
    feat_4_desc: "المدن الأخرى بالمملكة +50 درهم فقط",

    // Section Titles
    sec_featured_title: "إبداعات المحترف",
    sec_featured_subtitle: "جلابيب أصيلة صيغت يدوياً للمناسبات الراعية",
    sec_bestsellers_title: "التصاميم الأكثر طلباً",
    sec_bestsellers_subtitle: "قطعنا الأيقونية الأكثر طلباً",
    sec_craft_title: "دقة الخياطة والتشطيب",
    sec_craft_subtitle: "إتقان وتشطيب باحترافية عالية",
    sec_testimonials_title: "آراء عميلاتنا",
    sec_testimonials_subtitle: "انطباعات نخبة العملاء وعشاق الخياطة الرفيعة",
    sec_insta_title: "@elyasmine_brand",
    sec_insta_subtitle: "تابعوا حسابنا على إنستغرام لمشاهدة جديد التصاميم اليومية",
    
    // Craftsmanship 3 Steps
    craft_1_title: "1. ضفيرة السفيفة الذهبية",
    craft_1_desc: "تقنية عريقة تدمج الحرير الصافي وخيوط الذهب لمظهر أنيق وصحّي.",
    craft_2_title: "2. عقد العقاد اليدوية",
    craft_2_desc: "أكثر من 100 عقدة حريرية معقودة يدوياً بحرفية عالية.",
    craft_3_title: "3. التشطيب الاحترافي",
    craft_3_desc: "قصة دقيقة وانسيابية تضمن الأناقة والراحة التامة.",

    // Collection Page
    filter_all: "جميع التصاميم",
    filter_women: "تشكيلة النساء",
    filter_men: "تشكيلة الرجال",
    filter_royal: "السلهام الملكي",
    filter_bridal: "خياطة العروس",
    filter_fabric: "نوع القماش",
    filter_price: "نطاق السعر",
    sort_by: "ترتيب حسب",
    sort_featured: "المميزة",
    sort_price_low: "السعر: من الأقل للأعلى",
    sort_price_high: "السعر: من الأعلى للأقل",
    sort_rating: "الأعلى تقييماً",
    showing_results: "عرض القطع",

    // Product Details
    quick_view: "نظرة سريعة",
    add_to_cart: "إضافة لحقيبة التسوق",
    order_whatsapp: "الطلب مباشرة عبر الواتساب (0720691741)",
    view_details: "عرض التفاصيل",
    size_label: "اختر المقاس",
    size_guide: "دليل القياسات",
    artisan_time: "ساعات العمل اليدوي",
    fabric_spec: "مكونات القماش",
    reviews: "التقييمات",
    in_stock: "متوفر - جاهز للإرسال",
    guarantee: "التوصيل مجاناً بأكادير (+50 درهم لباقي المدن)",

    // Cart & Checkout
    cart_title: "حقيبة التسوق الخاصة بك",
    cart_empty: "حقيبة التسوق فارغة حالياً",
    subtotal: "المجموع الفرعي",
    shipping: "الشحن والتوصيل",
    shipping_free: "مجاني بأكادير / +50 د.م لباقي المدن",
    total: "المجموع الكلي",
    checkout_whatsapp: "إتمام الطلب عبر الواتساب (0720691741)",
    promo_placeholder: "رمز الخصم",
    apply_promo: "تطبيق",

    // Contact & Atelier
    contact_title: "التواصل مع E&E Fashion Store",
    contact_subtitle: "اطلبي مباشرة عبر الواتساب (0720691741) أو الإنستغرام @elyasmine_brand",
    form_name: "الاسم الكامل",
    form_email: "البريد الإلكتروني",
    form_phone: "الهاتف / الواتساب",
    form_boutique: "اختر المدينة / الموضوع",
    form_msg: "رسالتك أو طلب الخياطة الخاصة",
    form_submit: "إرسال الرسالة",
    form_success: "شكراً لكم. سيتواصل معكم فريقنا عبر الواتساب.",

    // Footer
    footer_about: "دار E&E Fashion Store (@elyasmine_brand) متخصصة في خياطة جميع تصاميم الجلابة بدقة عالية وتشطيب باحترافية وتوصيل بالمجان داخل أكادير.",
    footer_locations: "التواصل",
    footer_rights: "جميع الحقوق محفوظة. E&E Fashion Store."
  }
};

class JLALB_i18nManager {
  constructor() {
    this.currentLang = localStorage.getItem("jlalb_lang") || "en";
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
  }

  setLanguage(lang) {
    if (!JLALB_I18N[lang]) return;
    this.currentLang = lang;
    localStorage.setItem("jlalb_lang", lang);
    this.applyLanguage(lang);
  }

  applyLanguage(lang) {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    
    // Set Direction (RTL for Arabic, LTR for English/French)
    if (lang === "ar") {
      html.setAttribute("dir", "rtl");
      document.body.classList.add("rtl-mode");
    } else {
      html.setAttribute("dir", "ltr");
      document.body.classList.remove("rtl-mode");
    }

    // Update Language Button labels
    document.querySelectorAll(".lang-btn").forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const currentLangDisplay = document.getElementById("current-lang-code");
    if (currentLangDisplay) {
      currentLangDisplay.textContent = lang.toUpperCase();
    }

    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      const translation = this.t(key);
      if (translation) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          if (el.hasAttribute("placeholder")) {
            el.setAttribute("placeholder", translation);
          } else {
            el.value = translation;
          }
        } else {
          el.textContent = translation;
        }
      }
    });

    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
  }

  t(key) {
    const dict = JLALB_I18N[this.currentLang] || JLALB_I18N.en;
    return dict[key] || JLALB_I18N.en[key] || key;
  }
}

window.i18n = new JLALB_i18nManager();
