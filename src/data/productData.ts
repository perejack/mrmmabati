
export type ProductVariant = {
  name: string;
  price: string;
};

export const productData = [
  {
    title: "VERSATILE",
    slug: "versatile",
    description: "High-quality versatile roofing sheets, suitable for various architectural styles. Offers a modern and aesthetic appeal.",
    features: [
      "Durable and long-lasting",
      "Available in multiple gauges",
      "Weather resistant",
      "Modern aesthetic",
    ],
    priceVariants: [
      { name: "Versatile gauge 28", price: "KSh 650 / meter" },
      { name: "Versatile gauge 30", price: "KSh 555 / meter" }
    ],
    availableColors: "Multiple colors available",
    imageSrc: "https://shop.mabati.com/media/catalog/product/v/e/versatile_m_in_sm.png?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
    sale: false
  },
  {
    title: "BOX PROFILE",
    slug: "box-profile",
    description: "Economical and strong box profile sheets, ideal for roofing and cladding in residential and commercial buildings.",
    features: [
      "Economical choice",
      "Strong and rigid profile",
      "Suitable for roofing and cladding",
      "Available in different gauges",
    ],
    priceVariants: [
      { name: "Box profile gauge 28", price: "KSh 530 / meter" },
      { name: "Box profile gauge 30", price: "KSh 470 / meter" }
    ],
    availableColors: "Multiple colors available",
    imageSrc: "https://www.wegogroup.co.ke/wp-content/uploads/2023/10/Box-Profile-914-Charcoal-Grey-Matt-1.jpg",
    sale: false
  },
  {
    title: "ROMANTILE",
    slug: "romantile",
    description: "Elegant Romantile roofing sheets that mimic the classic look of Roman clay tiles, offering beauty without the heavy weight.",
    features: [
      "Classic clay tile appearance",
      "Lightweight yet durable",
      "Enhances building aesthetics",
      "Available in different gauges",
    ],
    priceVariants: [
      { name: "Romantile gauge 28", price: "KSh 640 / meter" },
      { name: "Romantile gauge 30", price: "KSh 550 / meter" }
    ],
    availableColors: "Multiple colors available",
    imageSrc: "https://www.roofingmabati.co.ke/images/Bamboo2.jpg",
    sale: false
  },
  {
    title: "CORRUGATED IRON SHEET",
    slug: "corrugated-iron-sheet",
    description: "Traditional and cost-effective corrugated iron sheets, widely used for various roofing and cladding applications.",
    features: [
      "Cost-effective solution",
      "Widely used and versatile",
      "Easy to install",
      "Available in colored options",
    ],
    priceVariants: [
      { name: "Corrugated iron sheet gauge 28", price: "KSh 440 / meter" },
      { name: "Corrugated iron sheet gauge 30", price: "KSh 390 / meter" }
    ],
    availableColors: "Multiple colors available",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRW7rFCcm_5dm8wA7UPS6TKXeAXPOr-ulVWw&s",
    sale: false
  },
  {
    title: "ORDINARY NON-COLOURED",
    slug: "ordinary-non-coloured",
    description: "Standard non-coloured (galvanized) roofing sheets, offering a basic and durable roofing solution at an affordable price.",
    features: [
      "Most affordable option",
      "Durable galvanized steel",
      "Basic and functional",
      "Suitable for various utility purposes",
    ],
    priceVariants: [
      { name: "Ordinary non coloured gauge 30", price: "KSh 300 / meter" },
      { name: "Ordinary non colored gauge 28", price: "KSh 350 / meter" }
    ],
    availableColors: "", // Explicitly no colors
    imageSrc: "https://goldenroofmabati.co.ke/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-15-at-15.02.24_8012efc6.jpg",
    sale: false
  },
  {
    title: "ORIENTILE MABATI",
    slug: "orientile-mabati",
    description: "Premium Orientile mabati sheets with a distinctive design, offering a unique and stylish roofing solution.",
    features: [
      "Unique and stylish design",
      "Premium roofing profile",
      "Enhances property value",
      "Durable and weather-resistant",
    ],
    priceVariants: [
      { name: "Orientile mabati gauge 28", price: "KSh 720 / meter" },
      { name: "Orientile mabati gauge 30", price: "KSh 655 / meter" }
    ],
    availableColors: "Multiple colors available",
    imageSrc: "https://www.wegogroup.co.ke/wp-content/uploads/2023/10/Star-Tile-Maroon-Matt-1.jpg",
    sale: false
  }
];
