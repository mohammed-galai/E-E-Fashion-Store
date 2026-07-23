/**
 * E&E FASHION STORE (@elyasmine_brand)
 * Official Product Catalog — Abayas & Jellabas Collection
 * Price: 180 DH | Sizes: L & XL | Free delivery in Agadir
 * WhatsApp: +212720691741
 */

const JLALB_PRODUCTS = [
  /* ─── 1. Abaya Off-White Silk Papillon (Hero) ─── */
  {
    id: "ee-abaya-ivory-01",
    name: "Abaya Off-White Silk Papillon",
    name_fr: "Abaya Off-White Silk Papillon",
    name_ar: "عباية أوف-وايت حريرية بقصة الفراشة",
    subtitle: "قماش حريري فاخر بلون الأوف-وايت الأنيق",
    subtitle_fr: "Tissu soie satiné nude élégant avec accessoires dorés",
    subtitle_ar: "قماش حريري ناعم أوف-وايت مع إكسسوارات ذهبية راقية",
    category: "women",
    category_key: "royal",
    price: 18,
    price_mad: 180,
    original_price_mad: 250,
    rating: 5.0,
    reviews_count: 72,
    tag: "Bestseller 180 DH",
    fabric: "Soie Satiné Luxueux",
    fabric_fr: "Tissu Soie Nida Satiné Premium",
    fabric_ar: "قماش حريري ناعم فاخر",
    artisan_hours: "خياطة بدقة عالية",
    artisan_hours_fr: "Couture haute précision sur mesure",
    artisan_hours_ar: "خياطة جميع التصاميم بدقة عالية",
    colors: [
      { name: "Off-White / أوف وايت", hex: "#F2EBE1", image: "assets/images/insta_ivory_gold.jpg" }
    ],
    sizes: ["L", "XL", "Sur Mesure"],
    images: [
      "assets/images/insta_ivory_gold.jpg",
      "assets/images/abaya_ivory.jpg"
    ],
    description: "عباية أوف-وايت حريرية من تصميم E&E Fashion Store (@elyasmine_brand). قصة فراشة أنيقة، قماش حريري ناعم وفاخر مع تشطيب باحترافية عالية. سعر 180 درهم فقط، توصيل مجاني بأكادير.",
    description_fr: "Abaya Off-White en soie signée E&E Fashion Store (@elyasmine_brand). Coupe papillon élégante, tissu satiné fluide, finitions impeccables. 180 DH, livraison gratuite à Agadir.",
    description_ar: "عباية حريرية أوف-وايت من E&E Fashion Store. قصة فراشة فاخرة وقماش ناعم مع تشطيب احترافي. 180 درهم فقط.",
    details: {
      embroidery: "Coupe Papillon Fluide & Finitions Soignées",
      embroidery_fr: "Manches évasées & Finitions précises",
      embroidery_ar: "أكمام عريضة خياطة دقيقة وتشطيب احترافي",
      fit: "Coupe fluide évasée avec foulard assorti",
      fit_fr: "Coupe évasée élégante très confortable",
      fit_ar: "قصة عريضة مريحة مع شال حريري مطابق",
      care: "Lavage doux à 30°C ou lavage main.",
      care_fr: "Lavage doux à 30°C ou lavage main.",
      care_ar: "غسيل يدوي لطيف أو في الغسالة بماء بارد."
    }
  },

  /* ─── 2. Abaya Chocolat Brodée ─── */
  {
    id: "ee-abaya-brown-01",
    name: "Abaya Chocolat Brodée Florale",
    name_fr: "Abaya Chocolat Brodée Florale",
    name_ar: "عباية شوكولاتة مطرزة بزخارف زهرية",
    subtitle: "تطريز زهري دقيق على قماش حريري بني غامق",
    subtitle_fr: "Broderies florales fines sur tissu soie chocolat profond",
    subtitle_ar: "قماش حريري بني غامق مطرز بزهور دقيقة",
    category: "women",
    category_key: "heritage",
    price: 18,
    price_mad: 180,
    original_price_mad: 280,
    rating: 5.0,
    reviews_count: 64,
    tag: "Exclusif 180 DH",
    fabric: "Soie Chocolat Brodée",
    fabric_fr: "Tissu Soie Premium avec broderies florales",
    fabric_ar: "حرير بني فاخر مطرز",
    artisan_hours: "تطريز يدوي بدقة",
    artisan_hours_fr: "Broderies artisanales faites main",
    artisan_hours_ar: "تطريز يدوي بدقة عالية",
    colors: [
      { name: "Chocolat / شوكولاتة", hex: "#4A332B", image: "assets/images/insta_brown_floral.jpg" }
    ],
    sizes: ["L", "XL", "Sur Mesure"],
    images: [
      "assets/images/insta_brown_floral.jpg",
      "assets/images/abaya_brown.jpg"
    ],
    description: "عباية شوكولاتة مطرزة من E&E Fashion Store. تطريز زهري دقيق على قماش حريري بني غامق فاخر. 180 درهم فقط، توصيل مجاني بأكادير.",
    description_fr: "Abaya Chocolat brodée de E&E Fashion Store (@elyasmine_brand). Broderies florales délicates sur tissu soie chocolat intense. 180 DH, livraison gratuite à Agadir.",
    description_ar: "عباية شوكولاتة مطرزة من E&E Fashion Store. تطريز زهري دقيق وقماش حريري فاخر. 180 درهم.",
    details: {
      embroidery: "Broderies florales fines sur manches",
      embroidery_fr: "Broderies artisanales délicates",
      embroidery_ar: "تطريز زهري دقيق على الأكمام",
      fit: "Coupe ample & élégante",
      fit_fr: "Coupe généreuse et confortable",
      fit_ar: "قصة فضفاضة مريحة وأنيقة",
      care: "Lavage doux à 30°C.",
      care_fr: "Lavage doux à 30°C recommandé.",
      care_ar: "غسيل لطيف بماء بارد."
    }
  },

  /* ─── 3. Abaya Bordeaux Velours ─── */
  {
    id: "ee-abaya-burgundy-01",
    name: "Abaya Bordeaux Velours Royal",
    name_fr: "Abaya Bordeaux Velours Royal",
    name_ar: "عباية بورقندي مخملية ملكية",
    subtitle: "بورقندي عميق، إطلالة ملكية لكل مناسبة",
    subtitle_fr: "Bordeaux velours profond, allure royale pour toutes occasions",
    subtitle_ar: "بورقندي داكن مخملي، إطلالة ملكية راقية",
    category: "women",
    category_key: "velvet",
    price: 18,
    price_mad: 180,
    original_price_mad: 270,
    rating: 5.0,
    reviews_count: 89,
    tag: "Premium 180 DH",
    fabric: "Velours Bordeaux Royal",
    fabric_fr: "Tissu velours satiné bordeaux profond",
    fabric_ar: "قماش مخملي بورقندي فاخر",
    artisan_hours: "خياطة وتشطيب ممتاز",
    artisan_hours_fr: "Finitions premium haut de gamme",
    artisan_hours_ar: "خياطة وتشطيب بدقة عالية",
    colors: [
      { name: "Bordeaux / بورقندي", hex: "#5C1D24", image: "assets/images/insta_burgundy_gold.jpg" }
    ],
    sizes: ["L", "XL", "Sur Mesure"],
    images: [
      "assets/images/insta_burgundy_gold.jpg",
      "assets/images/abaya_burgundy.jpg"
    ],
    description: "عباية بورقندي ملكية من E&E Fashion Store (@elyasmine_brand). قماش مخملي فاخر بلون بورقندي العميق مع إكسسوارات ذهبية. 180 درهم، توصيل مجاني بأكادير.",
    description_fr: "Abaya Bordeaux royale de E&E Fashion Store (@elyasmine_brand). Tissu velours satiné bordeaux profond, accessoires dorés. 180 DH, livraison gratuite à Agadir.",
    description_ar: "عباية بورقندي ملكية من E&E Fashion Store. قماش مخملي فاخر وإكسسوارات ذهبية. 180 درهم.",
    details: {
      embroidery: "Finitions dorées & Coupe évasée premium",
      embroidery_fr: "Détails dorés & Coupe évasée élégante",
      embroidery_ar: "تفاصيل ذهبية وقصة فراشة ملكية",
      fit: "Coupe royale avec accessoires assortis",
      fit_fr: "Coupe évasée royale très élégante",
      fit_ar: "قصة ملكية مريحة مع إكسسوارات ذهبية",
      care: "Lavage doux à 30°C.",
      care_fr: "Lavage doux recommandé.",
      care_ar: "غسيل لطيف بماء فاتر."
    }
  },

  /* ─── 4. Abaya Vert Khaki Évasée ─── */
  {
    id: "ee-abaya-green-01",
    name: "Abaya Vert Khaki Évasée",
    name_fr: "Abaya Vert Khaki Évasée",
    name_ar: "عباية خضراء زيتية مبتسطة",
    subtitle: "خضراء زيتية عميقة بقصة فضفاضة أنيقة",
    subtitle_fr: "Vert kaki profond, coupe évasée ultra-confortable",
    subtitle_ar: "لون أخضر زيتي غامق بقصة منسابة مريحة",
    category: "women",
    category_key: "casual",
    price: 18,
    price_mad: 180,
    original_price_mad: 240,
    rating: 4.9,
    reviews_count: 53,
    tag: "Nouveau 180 DH",
    fabric: "Crêpe Premium Vert Khaki",
    fabric_fr: "Tissu crêpe premium vert kaki naturel",
    fabric_ar: "كريب أخضر زيتي ممتاز",
    artisan_hours: "خياطة دقيقة",
    artisan_hours_fr: "Coupe et couture soignées",
    artisan_hours_ar: "خياطة وتشطيب دقيق",
    colors: [
      { name: "Vert Khaki / أخضر زيتي", hex: "#3B4A34", image: "assets/images/insta_green_flare.jpg" }
    ],
    sizes: ["L", "XL", "Sur Mesure"],
    images: [
      "assets/images/insta_green_flare.jpg",
      "assets/images/abaya_khaki.jpg"
    ],
    description: "عباية خضراء زيتية من E&E Fashion Store (@elyasmine_brand). قصة فضفاضة مريحة وعصرية، قماش كريب ممتاز. 180 درهم، توصيل مجاني بأكادير.",
    description_fr: "Abaya Vert Khaki de E&E Fashion Store (@elyasmine_brand). Coupe évasée ultra-confortable, tissu crêpe premium. 180 DH, livraison gratuite à Agadir.",
    description_ar: "عباية خضراء زيتية من E&E Fashion Store. قصة منسابة مريحة وقماش ممتاز. 180 درهم.",
    details: {
      embroidery: "Coupe évasée & tissu crêpe naturel",
      embroidery_fr: "Coupe ample confortable & moderne",
      embroidery_ar: "قصة منسابة مريحة وعصرية",
      fit: "Coupe droite évasée très confortable",
      fit_fr: "Coupe ample naturelle et élégante",
      fit_ar: "قصة مريحة جداً وأنيقة",
      care: "Lavage machine à 30°C doux.",
      care_fr: "Lavage doux machine ou main.",
      care_ar: "غسيل آلي لطيف أو يدوي."
    }
  },

  /* ─── 5. Abaya Cappuccino Satin ─── */
  {
    id: "ee-abaya-taupe-01",
    name: "Abaya Cappuccino Satin Jardin",
    name_fr: "Abaya Cappuccino Satin Jardin",
    name_ar: "عباية كابوتشينو ساتان حديقة",
    subtitle: "كابوتشينو دافئ بقماش ساتان ناعم ومضيء",
    subtitle_fr: "Cappuccino chaud, tissu satin brillant ultra-fluide",
    subtitle_ar: "لون كابوتشينو دافئ وقماش ساتان ناعم ومضيء",
    category: "women",
    category_key: "satin",
    price: 18,
    price_mad: 180,
    original_price_mad: 250,
    rating: 5.0,
    reviews_count: 61,
    tag: "Nouveau 180 DH",
    fabric: "Satin Cappuccino Premium",
    fabric_fr: "Tissu satin lustré cappuccino très doux",
    fabric_ar: "ساتان كابوتشينو فاخر ناعم ومضيء",
    artisan_hours: "خياطة ممتازة",
    artisan_hours_fr: "Couture et finitions haut de gamme",
    artisan_hours_ar: "خياطة وتشطيب عالي الجودة",
    colors: [
      { name: "Cappuccino / كابوتشينو", hex: "#7D6763", image: "assets/images/insta_taupe_garden.jpg" }
    ],
    sizes: ["L", "XL", "Sur Mesure"],
    images: [
      "assets/images/insta_taupe_garden.jpg",
      "assets/images/abaya_taupe.jpg"
    ],
    description: "عباية كابوتشينو ساتان من E&E Fashion Store (@elyasmine_brand). قماش ساتان ناعم ومضيء بلون كابوتشينو الدافئ. 180 درهم، توصيل مجاني بأكادير.",
    description_fr: "Abaya Cappuccino Satin de E&E Fashion Store (@elyasmine_brand). Tissu satin lustré cappuccino ultra-fluide. 180 DH, livraison gratuite à Agadir.",
    description_ar: "عباية كابوتشينو ساتان من E&E Fashion Store. ساتان ناعم ومضيء. 180 درهم.",
    details: {
      embroidery: "Satin lustré & Coupe évasée fluide",
      embroidery_fr: "Tissu satin premium & coupe moderne",
      embroidery_ar: "ساتان مضيء وقصة منسابة",
      fit: "Coupe évasée fluide & légère",
      fit_fr: "Coupe légère et très confortable",
      fit_ar: "قصة خفيفة مريحة جداً",
      care: "Lavage doux à 30°C.",
      care_fr: "Lavage à 30°C recommandé.",
      care_ar: "غسيل لطيف بماء فاتر."
    }
  }
];

if (typeof window !== "undefined") {
  window.JLALB_PRODUCTS = JLALB_PRODUCTS;
}
