const mockProducts = [
  {
    id: 1,
    name: "Samsung Galaxy A15",
    price: 146.00,
    image: "https://images.samsung.com/is/image/samsung/p6pim/ph/sm-a156ezkiphl/gallery/ph-galaxy-a15-5g-sm-a156-sm-a156ezkiphl-539370557?$684_547_PNG$",
    description: "A155M 128GB Dual-SIM GSM Unlocked Android Smartphone.",
    rating: 4.5,
    stock: 20,
    categoryId: 1,
    detailedDescription: [
    "Display: 6.5 inches, Super AMOLED - 1080 x 2340 pixels",
    "Memory: 128GB, 6GB RAM - MicroSD, up to 1TB",
    "Camera: Triple - 50MP(OIS)+ 5MP + 2MP, Selfie - 13 MP",
    "Platform: Android -- Mediatek Helio G99 -- Octa-core -- Mali-G57 MC2",
    "Battery: 5000 mAh, non-removable",
    "Dimensions: 6.30 x 3.02 x 0.33 in, 7.05 oz",
  ]
  },
  {
    id: 2,
    name: "Canon EOS Rebel T7",
    price: 429.00,
    image: "https://i5.walmartimages.com/seo/Canon-EOS-Rebel-T7-EF-S-18-55mm-IS-II-Kit_823115d9-0e12-4b7c-971a-6d6da1d2578c.96eab39994849571fc2e897d872dde65.jpeg",
    description: "DSLR Camera with 18-55mm Lens.",
    rating: 4.7,
    stock: 15,
    categoryId: 2,
    detailedDescription: [
    "24.1 Megapixel CMOS (APS-C) sensor with is 100–6400 (H: 12800)",
    "Built-in Wi-Fi and NFC technology",
    "9-Point AF system and AI Servo AF",
    "Optical Viewfinder with approx 95% viewing coverage",
    "Use the EOS Utility Webcam Beta Software (Mac and Windows) to turn your compatible Canon camera into a high-qualit",
  ]
  },
  {
    id: 3,
    name: "JBL Quantum TWS",
    price: 149.00,
    image: "https://www.jbl.com.ph/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw39743370/1.JBL_Quantum%20TWS_Product%20Image_Hero.png",
    description: "True Wireless Noise Cancelling Gaming Earbuds.",
    rating: 4.3,
    stock: 30,
    categoryId: 3,
    detailedDescription: [
    "2JBL QuantumSURROUND: Feel like you're stepping inside the game with JBL QuantumSURROUND* for immersive and accurate sound all around you. *JBL QuantumSURROUND is only available on PC in combination with JBL QuantumENGINE software. Check the connectivity guide for compatibility.",
  ]
  },
  {
    id: 4,
    name: "Soundcore Liberty 4 Pro",
    price: 129.00,
    image: "https://soundcore.ph/cdn/shop/files/Black_Soundcore_Liberty_4_Pro.jpg?v=1741056016",
    description: "Noise Cancelling Wireless Earbuds.",
    rating: 4.6,
    stock: 25,
    categoryId: 3,
    detailedDescription: [
    "Matchless Noise Cancellation: Liberty 4 Pro noise cancelling earbuds boast 7 sensors—6 sound sensors and 1 barometric pressure sensor—to capture noise from every angle. From planes to trains, enjoy a serene journey with 3× stronger noise reduction.",
  ]
  },
  {
    id: 5,
    name: "Gucci Soho Handbag",
    price: 2042.00,
    image: "https://m.media-amazon.com/images/I/81zb7kDasbL._SS1000_.jpg",
    description: "Off White Leather Handbag Crossbody Clutch.",
    rating: 4.8,
    stock: 5,
    categoryId: 4,
    detailedDescription: [
    "This beautiful embossed ivory crossbody is the perfect bag for any everyday look. The color makes it easy to match everything in your wardrobe and the classic embossed Gucci logo makes it a complete classic piece for any handbag collection. This bag is light weight and simply perfect.",
    "Model: 536224",
    "Ivory Leather Light Fine Gold Chain Strap",
    "Magnetic Snap Closure One interior zip pocket One interior slip pocket",
    "Strap Drop: 21.5inches Measurements: 11 x 3.5 x 6.75",
  ]
  },
  {
    id: 6,
    name: "Samsung Galaxy S24 Ultra",
    price: 197.00,
    image: "https://images.samsung.com/is/image/samsung/p6pim/ph/2401/gallery/ph-galaxy-s24-s928-sm-s928bzkcphl-thumb-539303315?$GNB_CARD_FULL_M_PNG_PNG$",
    description: "A155M 128GB Dual-SIM GSM Unlocked Android Smartphone.",
    rating: 4.8,
    stock: 12,
    categoryId: 1,
    detailedDescription: [
    "Operating System | Android 14, One UI 6.1",
    "Ram Memory Installed Size | 8 GB",
    "Memory Storage Capacity | 128 GB",
    "Screen Size | 6.2 Inches",
    "Resolution | 2340 x 1080",
    "Refresh Rate | 120 Hz",
  ]
  },
  {
    id: 7,
    name: "Michael Kors Charlotte Large 3-in-1 Tote Crossbody Handbag Leather",
    price: 1499.00,
    image:"https://images-cdn.ubuy.ae/6762e43ed5964768436e5e6f-michael-kors-charlotte-large-3-in-1-tote.jpg",
    description: "Leather Handbag with 3-in-1 Tote Crossbody.",
    rating: 4.9,
    stock: 8,
    categoryId: 4,
    detailedDescription: [
    "TZipper closure",
    "Included components : Crossbody Bag",
  ]
  },
  {
  id: 8,
  name: "Victoria's Secret Bombshell Eau de Parfum",
  price: 69.00,
  image: "https://www.perfumestudiomnl.com/cdn/shop/files/23C20537-5E57-4C7D-9995-5AB0E6F74584.jpg?v=1720250793",
  description: "Eau de Parfum for Women.",
  rating: 4.7,
  stock: 20,
  categoryId: 4,
  detailedDescription: [
    "There’s a Bombshell in all of us. Confident and bold, Bombshell opens with the bright sparkle of Brazilian purple passion fruit.",
    "The heart of the fragrance blooms with Bombshell’s signature floral, the Shangri-La peony.",
    "Madagascan vanilla orchid adds a creamy sweetness.",
    "Fragrance type: Fruity Floral",
    "Scent Notes: purple passion fruit, Shangri-La peony and vanilla orchid",
  ]
},
{
  id: 9,
  name: "GROWIT Heavy Duty Gardening Tools",
  price: 44.00,
  image: "https://m.media-amazon.com/images/I/71y1Xnf+UtL.jpg",
  description: "A COMPLETE GARDEN TOOL SET - A durable 22 pcs sets is all you need for your gardening.",
  rating: 4.5,
  stock: 9,
  categoryId: 7,
  detailedDescription: [
    "PREMIUM GARDEN TOOLS - Our 22 gardening tool set comes with a Transplanter, Trowel, Hand Rake, Weeder, Pruner, 15 Plant tags, a pair of Hand Gloves, and a Heavy Duty Garden Bag to keep all your tools packed away provides everything you need to maintain a beautiful and healthy garden.",
  ]
},
{
  id: 10,
  name: "Saker Mini Chainsaw,Portable Electric Chainsaw Cordless",
  price: 69.00,
  image:"https://images-na.ssl-images-amazon.com/images/I/71es4-uG11L._SL250_.jpg",
  description: "Mini Chainsaw for Wood Cutting.",
  rating: 4.5,
  stock: 15,
  categoryId: 8,
  detailedDescription: [
    "Saker Mini Chainsaw adapts a high-quality guide chain that has undergone a deep quenching process to ensure smooth cutting. In addition, a pure copper motor is used, which is very powerful. cutting efficiency is higher and faster.",
  ]
},
{
  id: 11,
  name: "Tiny Changes, Remarkable Results",
  price: 29.00,
  image: "https://m.media-amazon.com/images/I/41MypKTpOlL._AC_SY580_.jpg",
  description: "A book about making small changes in your life.",
  rating: 4.5,
  stock: 10,
  categoryId: 5,
  detailedDescription: [
    "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results"
  ]
},
{
  id: 12,
  name: "We Solve Murders: A Novel",
  price: 14.99,
  image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1708482199l/203956647.jpg",
  description: "A mystery novel.",
  rating: 4.5,
  stock: 20,
  categoryId: 5,
  detailedDescription: [
    "A brand new mystery. An iconic new detective duo. And a thrilling new murder to solve"
  ]
},
{
  id: 13,
  name: "O'KADY Anti Aging Skin Care Sets",
  price: 49.99,
  image: "https://m.media-amazon.com/images/I/51oHlGJfkaL._AC_SY580_.jpg",
  description: "A skin care set for anti-aging.",
  rating: 4.5,
  stock: 15,
  categoryId: 6,
  detailedDescription: [
    "Comprehensive set includes Women's Cleansing face (80g) Clear essence (120ml) Essence (10ml * 6) Essence Eye Cream (20g) Refreshing and beautifying essence milk (100ml Refreshing and beautifying essence cream (30g) Beautifying Light Makeup BB Cream (35g) providing a complete skin care routine for anti-aging needs.The Golden box and practicality make it a great creative for women. Top tier birthday for women, for wives, for girlfriends, for her, for mothers. Protect their skin and maintain a youthful appearance."
  ]
},
{
  id: 14,
  name: "BAIMEI IcyMe Ice Roller",
  price: 19.99,
  image: "https://m.media-amazon.com/images/I/61Vlxag4MIL.jpg",
  description: "The frozen ice roller for face women calms skin, reduces sunburns.",
  rating: 4.5,
  stock: 10,
  categoryId: 6,
  detailedDescription: [
    "The skin care tool provides lasting coolness to help you reduce puffiness and wake you up, it's a choice of pink relaxation beauty gifts for women"
  ]
},
{
  id: 15,
  name: "Shure MV7X Microphone",
  price: 199.00,
  image: "https://products.shureweb.eu/shure_product_db/product_main_images/files/0a5/4f1/be-/original/fe71d068e73acc951e1c9a0458a7093c.webp",
  description: "A professional microphone.",
  rating: 4.5,
  stock: 5,
  categoryId: 9,
  detailedDescription: [
    "XLR OUTPUT ONLY - Connect to all professional interfaces with ease via XLR without the need to add an in-line pre-amp for additional gain."
  ]
},
{
  id: 16,
  name: "Shure MoveMic One",
  price: 99.00,
  image: "https://products.shureweb.eu/cdn-cgi/image/width=1380,height=1380,format=auto/shure_product_db/product_images/files/968/866/56-/original/d576377eb44c7e684a8d5889062ef36a.webp",
  description: "A wireless microphone.",
  rating: 4.5,
  stock: 10,
  categoryId: 9,
  detailedDescription: [
    "ULTRA-COMPACT & DISCRETE - MoveMic has been purposely designed with one of the smallest, most discrete form factors on the market to be almost invisible – nobody wants a big, bulky microphone distracting your next shot.",
    "24-HR BATTERY - Every MoveMic lavalier microphone contains up to eight hours of battery life, plus an additional two eight-hour charges within the charge case, giving you at least 24 hours of recording for every full charge."
  ]
},
{
  id: 17,
  name: "Commercial French Fry Cutter Stainless Steel",
  price: 29.99,
  image: "https://m.media-amazon.com/images/I/71UaNEniHtL.jpg",
  description: "A commercial french fry cutter.",
  rating: 4.5,
  stock: 15,
  categoryId: 10,
  detailedDescription: [
  " SeewtLice French fry cutter is made of aluminum alloy body, premium stainless steel pusher plate, and food-grade plastic pusher head, which is safe to touch the food. It is lighter, stronger, more stable and efficient. Suitable for cutting potatoes, carrots, cucumbers, onions and other vegetables and fruits"
  ]
},
{
  id: 18,
  name:"Brewin Knife Set, Kitchen Knife Set, Knives Set for Kitchen",
  price: 49.99,
  image: "https://sithimy.s3.ap-southeast-1.amazonaws.com/sithimy/media/ck9LEpaef7c40mqrLzyuVsT2d8O3x4mILFXpkMVw.jpg",
  description: "A kitchen knife set.",
  rating: 4.5,
  stock: 10,
  categoryId: 10,
  detailedDescription: [
  "PERFECT ALL-IN-ONE SET - Brewin kitchen knife set includes 1 x 8” chef knife, 1 x 8” slicing knife, 1 x 8” bread knife, 1 x 5” utility knife, 1 x 5” Santoku knife, 1 x kitchen scissors, 1 x universal knife block. Germain 1.4116 stainless steel. Aesthetic design. Brewin knife set meets all your kitchen works."
  ]
}

];

export default mockProducts;
