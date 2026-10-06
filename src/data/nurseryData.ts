export interface Plant {
  id: string;
  name: string;
  botanicalName: string;
  category: 'Fruit Trees' | 'Indoor' | 'Outdoor' | 'Flowering' | 'Medicinal' | 'Bonsai' | 'Palms' | 'Exotic' | 'Pots & Soil';
  price: string;
  rating: number;
  reviewsCount: number;
  sunlight: 'Full Sun' | 'Partial Shade' | 'Bright Indirect' | 'Low Light';
  waterNeed: 'Low' | 'Moderate' | 'High';
  growthSpeed: 'Fast' | 'Moderate' | 'Slow';
  image: string;
  description: string;
  careTip: string;
  origin: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  highlights: string[];
}

export interface GardenMakeover {
  id: string;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const NURSERY_DETAILS = {
  name: "Sri Satyadeva Nursery",
  established: 1950,
  founder: "Pulla Satyanarayana (Chantiyya Garu)",
  tagline: "Cultivating Botanical Legacy & Landscape Grandeur Since 1950",
  address: "Veeravaram Road, Kadiyapulanka, Kadiyam, Andhra Pradesh 533126, India",
  phone: "+91 93460 81444",
  phoneSecondary: "+91 98491 54444",
  whatsapp: "+919346081444",
  email: "info@satyadevanursery.com",
  timings: "Monday – Sunday: 7:00 AM – 7:00 PM IST",
  stats: [
    { label: "Plant Species Cultivated", value: 500, suffix: "+" },
    { label: "Years of Green Legacy", value: 75, suffix: "Yrs" },
    { label: "Acres of Lush Nursery", value: 120, suffix: "Acres" },
    { label: "Happy Gardeners & Clients", value: 50, suffix: "k+" },
  ]
};

export const PLANT_CATEGORIES = [
  "All",
  "Fruit Trees",
  "Indoor",
  "Outdoor",
  "Flowering",
  "Medicinal",
  "Bonsai",
  "Palms",
  "Exotic",
  "Pots & Soil"
] as const;

export const PLANTS_DATA: Plant[] = [
  {
    id: "p1",
    name: "Royal Mango (Miyazaki & Alphonso)",
    botanicalName: "Mangifera indica",
    category: "Fruit Trees",
    price: "₹450",
    rating: 4.9,
    reviewsCount: 142,
    sunlight: "Full Sun",
    waterNeed: "Moderate",
    growthSpeed: "Fast",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800",
    description: "High-yield graft mango varieties including Miyazaki, Alphonso, and Banganapalli nurtured in rich alluvial Kadiyam soil.",
    careTip: "Requires deep watering twice a week during early root establishment. Prefers direct morning sunlight.",
    origin: "Kadiyam Graft Reserve",
    featured: true
  },
  {
    id: "p2",
    name: "Red Velvet Adenium (Desert Rose)",
    botanicalName: "Adenium obesum",
    category: "Flowering",
    price: "₹380",
    rating: 4.8,
    reviewsCount: 98,
    sunlight: "Full Sun",
    waterNeed: "Low",
    growthSpeed: "Slow",
    image: "https://images.unsplash.com/photo-1599598425947-22067512130c?auto=format&fit=crop&q=80&w=800",
    description: "Sculptural caudex plant featuring intense ruby-red double trumpet blossoms. Highly resilient drought-tolerant specimen.",
    careTip: "Allow soil to completely dry between waterings. Use gritty succulent mix.",
    origin: "Tropical Arid Cultivar",
    featured: true
  },
  {
    id: "p3",
    name: "Ficus Bonsai Master Specimen",
    botanicalName: "Ficus retusa / microcarpa",
    category: "Bonsai",
    price: "₹2,800",
    rating: 5.0,
    reviewsCount: 64,
    sunlight: "Bright Indirect",
    waterNeed: "Moderate",
    growthSpeed: "Slow",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
    description: "Hand-crafted 15-year aged Ficus bonsai with exposed aerial roots and lush glossy canopy.",
    careTip: "Mist foliage daily to encourage aerial root drop. Prune shape during spring.",
    origin: "Satyadeva Master Studio",
    featured: true
  },
  {
    id: "p4",
    name: "Monstera Deliciosa (Swiss Cheese)",
    botanicalName: "Monstera deliciosa",
    category: "Indoor",
    price: "₹650",
    rating: 4.9,
    reviewsCount: 215,
    sunlight: "Bright Indirect",
    waterNeed: "Moderate",
    growthSpeed: "Fast",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800",
    description: "Architectural indoor staple with giant perforated split leaves that bring rainforest opulence to modern interiors.",
    careTip: "Wipe large leaves with damp microfiber cloth monthly to maximize photosynthesis.",
    origin: "Central American Rainforest",
    featured: true
  },
  {
    id: "p5",
    name: "Golden Thai Dragonfruit Graft",
    botanicalName: "Hylocereus undatus",
    category: "Fruit Trees",
    price: "₹290",
    rating: 4.7,
    reviewsCount: 82,
    sunlight: "Full Sun",
    waterNeed: "Low",
    growthSpeed: "Fast",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&q=80&w=800",
    description: "Self-pollinating sweet yellow and red flesh dragonfruit vine that fruits within 12 months.",
    careTip: "Provide sturdy trellis support for climbing vertical vines.",
    origin: "Kadiyam Fruit Nursery",
    featured: false
  },
  {
    id: "p6",
    name: "Royal Bougainvillea Spectabilis",
    botanicalName: "Bougainvillea spectabilis",
    category: "Outdoor",
    price: "₹180",
    rating: 4.8,
    reviewsCount: 190,
    sunlight: "Full Sun",
    waterNeed: "Low",
    growthSpeed: "Fast",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800",
    description: "Cascading magenta and flame orange bougainvillea ideal for pergolas, archways, and compound walls.",
    careTip: "Prune heavily after flowering cycles to stimulate dense new flower buds.",
    origin: "South American Native",
    featured: true
  },
  {
    id: "p7",
    name: "Holy Tulsi & Neem Herbal Twin",
    botanicalName: "Ocimum tenuiflorum / Azadirachta indica",
    category: "Medicinal",
    price: "₹150",
    rating: 4.9,
    reviewsCount: 310,
    sunlight: "Full Sun",
    waterNeed: "Moderate",
    growthSpeed: "Fast",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&q=80&w=800",
    description: "Sacred medicinal duo revered in Ayurveda for air purification and immunity boost.",
    careTip: "Pinch top leaves regularly to promote bushy branching.",
    origin: "Indo-Vedic Heritage",
    featured: false
  },
  {
    id: "p8",
    name: "Areca Palm Luxury Cluster",
    botanicalName: "Dypsis lutescens",
    category: "Palms",
    price: "₹550",
    rating: 4.8,
    reviewsCount: 175,
    sunlight: "Partial Shade",
    waterNeed: "Moderate",
    growthSpeed: "Moderate",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=800",
    description: "Feathery air-purifying palm cluster that filters indoor air toxins and adds tropical elegance.",
    careTip: "Keep soil moist but avoid waterlogging the pot base.",
    origin: "Madagascar Island",
    featured: false
  },
  {
    id: "p9",
    name: "Variegated Ficus Rubber Plant",
    botanicalName: "Ficus elastica 'Tineke'",
    category: "Indoor",
    price: "₹480",
    rating: 4.9,
    reviewsCount: 112,
    sunlight: "Bright Indirect",
    waterNeed: "Low",
    growthSpeed: "Moderate",
    image: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&q=80&w=800",
    description: "Dramatic foliage with cream, olive, and rose pink painterly patterns on thick waxy leaves.",
    careTip: "Rotate plant weekly so all sides receive balanced light exposure.",
    origin: "Satyadeva Indoor Lab",
    featured: false
  },
  {
    id: "p10",
    name: "Hybrid Taiwan Pink Guava",
    botanicalName: "Psidium guajava",
    category: "Fruit Trees",
    price: "₹320",
    rating: 4.9,
    reviewsCount: 89,
    sunlight: "Full Sun",
    waterNeed: "Moderate",
    growthSpeed: "Fast",
    image: "https://images.unsplash.com/photo-1536511158945-16547d1d2398?auto=format&fit=crop&q=80&w=800",
    description: "Dwarf high-fruiting pink guava variety suitable for ground orchards and patio containers.",
    careTip: "Feed organic vermicompost every quarterly blooming season.",
    origin: "Kadiyam Fruit Nursery",
    featured: false
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "s1",
    title: "Landscape Architecture & Master Planning",
    tagline: "Transforming acreage into living, breathable botanical sanctuaries.",
    description: "From luxury residential villas to commercial resorts and industrial parks, our landscape architects design bespoke green topographies with native flora, stone pathways, water bodies, and automated irrigation.",
    iconName: "Compass",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200",
    highlights: ["3D Landscape Visualization", "Native AP Eco-Planting", "Drip & Automated Irrigation", "Hardscape & Water Features"]
  },
  {
    id: "s2",
    title: "Wholesale & Farm Supply Logistics",
    tagline: "Nationwide freight for mega plantations and government forestry projects.",
    description: "We equip commercial farmers, government urban forestry initiatives, real estate developers, and retail nurseries across India with certified root-ball packed plants delivered via specialized climate-controlled transport.",
    iconName: "Truck",
    image: "https://images.unsplash.com/photo-1595155467467-f470214c7c8c?auto=format&fit=crop&q=80&w=1200",
    highlights: ["Bulk Pricing Schedules", "Safe Root-Ball Packing", "Pan-India Freight Logistics", "Species Certification"]
  },
  {
    id: "s3",
    title: "Curated Indoor & Terrace Garden Setup",
    tagline: "Elevating interior spaces with air-cleansing biophilic design.",
    description: "Our garden stylists transform penthouses, corporate offices, and balconies into vibrant biophilic havens with custom ceramic planters, self-watering systems, and light-optimized species selection.",
    iconName: "Home",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    highlights: ["Custom Terracotta & Ceramic Pots", "Balcony Drip Systems", "Air-Purifying Plant Audits", "Seasonal Maintenance Contracts"]
  },
  {
    id: "s4",
    title: "Botanical Doctor & Soil Health Consultation",
    tagline: "75 years of agricultural expertise for your plant wellness.",
    description: "Facing pest attacks, soil yellowing, or fruit drop? Consult directly with our senior horticulturists in Kadiyam for organic pest remedies, micro-nutrient soil blending, and tree surgery.",
    iconName: "Stethoscope",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=1200",
    highlights: ["Soil pH & Micro-Nutrient Tests", "Organic Neem Pest Kits", "Plant Revival Rescue Services", "Fruit Yield Optimization"]
  }
];

export const MAKEOVERS_DATA: GardenMakeover[] = [
  {
    id: "m1",
    title: "Oceanfront Villa Transformation",
    location: "Visakhapatnam Coastline",
    beforeImage: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
    description: "Converted a barren sandy salt-sprayed plot into a tropical paradise with salt-resistant palms, bougainvillea, and lawn turf."
  },
  {
    id: "m2",
    title: "Corporate Rooftop Eco Sanctuary",
    location: "Hyderabad IT Corridor",
    beforeImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    description: "Designed a 10,000 sq ft green roof with shade trees, modular vertical walls, and seating pods reducing building heat by 4°C."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. K. Ramachandra Rao",
    role: "Estate Owner",
    location: "Rajahmundry",
    quote: "Satyadeva Nursery supplied over 2,000 fruit grafts for our organic farm. 98% survival rate and early harvest yields within 18 months!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t2",
    name: "Ananya Deshmukh",
    role: "Interior Architect",
    location: "Hyderabad",
    quote: "The quality of their Ficus bonsai and large indoor specimen plants is unparalleled. Their team delivered directly to our site with zero damage.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t3",
    name: "Venkatesh Varma",
    role: "Resort Developer",
    location: "Vijayawada",
    quote: "Chantiyya Garu’s legacy shows in every plant. They created our resort’s entire landscape from soil prep to mature palm avenue installation.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "Do you ship plants across all states in India?",
    answer: "Yes! We specialize in nationwide nursery transport. Small plants are packaged in wooden crates with moist moss roots, while mature trees and bulk orders travel via customized plant-freight trucks.",
    category: "Delivery"
  },
  {
    question: "Can I visit Sri Satyadeva Nursery in Kadiyapulanka?",
    answer: "Absolutely. Visitors are welcome 7 days a week from 7:00 AM to 7:00 PM IST. Explore our 120-acre mother plant orchards, bonsai display studio, and shade houses.",
    category: "Visiting"
  },
  {
    question: "What is your plant survival guarantee?",
    answer: "We guarantee 100% healthy delivery. If any plant arrives damaged during transit, notify us within 48 hours with a photo for instant replacement or refund credit.",
    category: "Guarantee"
  },
  {
    question: "How do I place bulk or wholesale orders for landscaping?",
    answer: "You can click any 'Enquire on WhatsApp' button on our catalogue or contact our main desk at +91 93460 81444 to receive a custom wholesale quote and plant stock list.",
    category: "Wholesale"
  }
];
