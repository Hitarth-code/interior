import { ImageAnalysis } from './imageAnalyzer';
import { DesignData, ColorItem, FurnitureItem, LightingItem, DecorItem } from '../types';

interface DesignTemplate {
  style: string;
  colors: { name: string; hex: string; usage: string }[];
  wallPaint: { primary: string; accent: string; ceiling: string; finish: string };
  flooring: { recommendation: string; color: string; material: string };
  furniture: Omit<FurnitureItem, 'estimatedPrice'>[];
  lighting: Omit<LightingItem, 'icon'>[];
  decor: Omit<DecorItem, 'icon'>[];
  summary: string;
}

const designTemplates: DesignTemplate[] = [
  {
    style: "Modern Scandinavian",
    colors: [
      { name: "Warm White", hex: "#FAF8F5", usage: "Main walls & ceiling" },
      { name: "Sage Green", hex: "#8B9E82", usage: "Accent wall" },
      { name: "Warm Oak", hex: "#C4956A", usage: "Furniture & flooring" },
      { name: "Soft Charcoal", hex: "#3D3D3D", usage: "Text accents & fixtures" },
      { name: "Cream Linen", hex: "#F0E6D3", usage: "Textiles & upholstery" },
      { name: "Terracotta", hex: "#C17B5A", usage: "Decorative accents" },
    ],
    wallPaint: { primary: "Warm White (#FAF8F5)", accent: "Sage Green (#8B9E82)", ceiling: "Pure White (#FFFFFF)", finish: "Matte for walls, Satin for trim" },
    flooring: { recommendation: "Engineered hardwood planks in herringbone pattern", color: "Natural warm oak", material: "European oak engineered wood, 190mm wide planks" },
    furniture: [
      { name: "L-Shaped Sectional Sofa", placement: "Against longest wall, facing windows", size: "280cm × 180cm × 85cm", material: "Linen upholstery in cream" },
      { name: "Round Coffee Table", placement: "Center of seating area", size: "90cm diameter × 40cm height", material: "Solid oak with matte finish" },
      { name: "TV Console Unit", placement: "Opposite sofa, centered on wall", size: "180cm × 45cm × 55cm", material: "Walnut veneer with metal legs" },
      { name: "Accent Armchair", placement: "Corner near window, angled toward sofa", size: "75cm × 80cm × 82cm", material: "Boucle fabric in terracotta" },
    ],
    lighting: [
      { type: "Ambient", description: "Recessed LED panel lights (4000K warm white)", placement: "Ceiling, grid pattern" },
      { type: "Task", description: "Adjustable floor lamp with reading arm", placement: "Beside armchair" },
      { type: "Decorative", description: "Pendant cluster (3 glass globes)", placement: "Ceiling, centered over seating" },
    ],
    decor: [
      { category: "Curtains", items: ["Floor-length sheer linen curtains in off-white", "Blackout roller blinds behind sheers"] },
      { category: "Rugs", items: ["Large jute area rug (240×180cm)", "Small wool accent rug near armchair"] },
      { category: "Wall Art", items: ["Large abstract canvas in sage/cream tones", "Set of 3 botanical prints in oak frames"] },
      { category: "Plants", items: ["Large fiddle leaf fig in corner", "Trailing pothos on floating shelves"] },
    ],
    summary: "A sophisticated Modern-Scandinavian fusion that maximizes natural light and creates a warm, inviting atmosphere with clean lines and organic textures.",
  },
  {
    style: "Industrial Contemporary",
    colors: [
      { name: "Concrete Gray", hex: "#8C8C8C", usage: "Main walls" },
      { name: "Matte Black", hex: "#1A1A1A", usage: "Accents & fixtures" },
      { name: "Rust Orange", hex: "#C65D3A", usage: "Accent elements" },
      { name: "Raw Wood", hex: "#8B6F47", usage: "Furniture & beams" },
      { name: "Off-White", hex: "#F5F3EF", usage: "Ceiling & trim" },
      { name: "Steel Blue", hex: "#4A6B7C", usage: "Textile accents" },
    ],
    wallPaint: { primary: "Concrete Gray (#8C8C8C)", accent: "Exposed brick or matte black (#1A1A1A)", ceiling: "Off-White (#F5F3EF)", finish: "Matte throughout" },
    flooring: { recommendation: "Polished concrete or large format porcelain tiles", color: "Medium gray with subtle veining", material: "Polished concrete or 600×600mm porcelain" },
    furniture: [
      { name: "Leather Chesterfield Sofa", placement: "Center of room, floating from walls", size: "220cm × 95cm × 80cm", material: "Distressed brown leather" },
      { name: "Reclaimed Wood Coffee Table", placement: "In front of sofa", size: "120cm × 60cm × 45cm", material: "Reclaimed teak with metal hairpin legs" },
      { name: "Metal Frame Bookshelf", placement: "Against feature wall", size: "150cm × 35cm × 200cm", material: "Black metal frame with oak shelves" },
      { name: "Industrial Side Table", placement: "Next to sofa", size: "50cm × 50cm × 55cm", material: "Iron pipe and reclaimed wood" },
    ],
    lighting: [
      { type: "Ambient", description: "Track lighting with adjustable spotlights", placement: "Ceiling, following architectural lines" },
      { type: "Task", description: "Edison bulb pendant with metal cage", placement: "Above coffee table" },
      { type: "Accent", description: "Wall-mounted industrial sconces", placement: "Flanking artwork or mirror" },
    ],
    decor: [
      { category: "Curtains", items: ["Heavy linen curtains in charcoal", "Industrial rod with visible hardware"] },
      { category: "Rugs", items: ["Vintage Persian-style rug in muted tones", "Layered with jute base rug"] },
      { category: "Wall Art", items: ["Large metal wall sculpture", "Black and white photography in metal frames"] },
      { category: "Plants", items: ["Snake plant in concrete planter", "Hanging ivy in macrame holder"] },
    ],
    summary: "A bold Industrial Contemporary design that celebrates raw materials, exposed elements, and urban sophistication with warm leather and wood accents.",
  },
  {
    style: "Bohemian Eclectic",
    colors: [
      { name: "Terracotta", hex: "#C67B5C", usage: "Accent wall" },
      { name: "Mustard Yellow", hex: "#D4A843", usage: "Textiles & accessories" },
      { name: "Deep Teal", hex: "#2C5F5F", usage: "Furniture & accents" },
      { name: "Cream", hex: "#FFF8E7", usage: "Main walls" },
      { name: "Rust", hex: "#A0522D", usage: "Decorative elements" },
      { name: "Sage", hex: "#9CAF88", usage: "Plants & soft furnishings" },
    ],
    wallPaint: { primary: "Warm Cream (#FFF8E7)", accent: "Terracotta (#C67B5C)", ceiling: "Soft White (#FEFCF6)", finish: "Matte with textured accent wall" },
    flooring: { recommendation: "Warm-toned hardwood or patterned tiles", color: "Honey oak or Moroccan pattern", material: "Solid hardwood or cement tiles with geometric pattern" },
    furniture: [
      { name: "Low-Profile Floor Sofa", placement: "Against accent wall", size: "250cm × 120cm × 60cm", material: "Velvet upholstery in deep teal" },
      { name: "Rattan Coffee Table", placement: "Center of seating", size: "100cm × 60cm × 35cm", material: "Natural rattan with glass top" },
      { name: "Macramé Hanging Chair", placement: "Corner with good light", size: "90cm × 90cm × 120cm", material: "Cotton macramé with wooden frame" },
      { name: "Vintage Wooden Chest", placement: "Foot of seating area", size: "120cm × 50cm × 50cm", material: "Carved mango wood" },
    ],
    lighting: [
      { type: "Ambient", description: "Paper lantern pendant lights in cluster", placement: "Ceiling at varying heights" },
      { type: "Task", description: "Brass floor lamp with fabric shade", placement: "Reading corner" },
      { type: "Decorative", description: "Fairy lights and candles", placement: "Shelves, mantel, and plants" },
    ],
    decor: [
      { category: "Curtains", items: ["Layered curtains with patterned and sheer fabrics", "Tasseled tiebacks"] },
      { category: "Rugs", items: ["Multiple layered rugs in different patterns", "Kilim and Moroccan berber styles"] },
      { category: "Wall Art", items: ["Gallery wall with mixed frames", "Tapestry and woven wall hangings"] },
      { category: "Plants", items: ["Abundant trailing plants", "Large monstera in woven basket"] },
    ],
    summary: "A vibrant Bohemian Eclectic design that layers textures, patterns, and global influences to create a cozy, personalized sanctuary full of character.",
  },
  {
    style: "Minimalist Zen",
    colors: [
      { name: "Pure White", hex: "#FFFFFF", usage: "Main walls" },
      { name: "Soft Gray", hex: "#D4D4D4", usage: "Accent elements" },
      { name: "Natural Wood", hex: "#B8956A", usage: "Furniture" },
      { name: "Stone", hex: "#9B9B9B", usage: "Flooring & accents" },
      { name: "Black", hex: "#000000", usage: "Minimal accents" },
      { name: "Pale Green", hex: "#C8D5B9", usage: "Plants & soft touches" },
    ],
    wallPaint: { primary: "Pure White (#FFFFFF)", accent: "None - keep walls clean", ceiling: "Pure White (#FFFFFF)", finish: "Matte throughout" },
    flooring: { recommendation: "Large format porcelain tiles or seamless concrete", color: "Light stone gray", material: "600×1200mm porcelain tiles or micro-cement" },
    furniture: [
      { name: "Platform Bed/Low Sofa", placement: "Centered on main wall", size: "200cm × 160cm × 30cm", material: "Light oak platform with linen cushions" },
      { name: "Nesting Side Tables", placement: "Flanking seating", size: "45cm & 35cm diameter", material: "Solid wood or stone" },
      { name: "Built-in Storage Wall", placement: "One full wall", size: "Custom floor to ceiling", material: "Handle-less matte white with wood accents" },
      { name: "Floating Shelf", placement: "Single shelf at eye level", size: "180cm × 25cm", material: "Solid oak, same tone as flooring" },
    ],
    lighting: [
      { type: "Ambient", description: "Hidden LED strips in coves", placement: "Ceiling perimeter and under shelves" },
      { type: "Task", description: "Single sculptural floor lamp", placement: "One corner, as design element" },
      { type: "Decorative", description: "Paper or rice paper pendant", placement: "Single statement piece" },
    ],
    decor: [
      { category: "Curtains", items: ["Simple roller blinds in white or light gray", "No drapes - maximize light"] },
      { category: "Rugs", items: ["Single large rug in neutral tone", "Low pile, natural fiber"] },
      { category: "Wall Art", items: ["Single large piece or none", "Minimalist line art or single sculpture"] },
      { category: "Plants", items: ["Single statement plant", "Ikebana arrangement"] },
    ],
    summary: "A serene Minimalist Zen design that embraces negative space, natural materials, and intentional simplicity to create a calming, uncluttered retreat.",
  },
  {
    style: "Luxury Modern",
    colors: [
      { name: "Champagne", hex: "#F7E7CE", usage: "Main walls" },
      { name: "Navy Blue", hex: "#1B365D", usage: "Accent wall or furniture" },
      { name: "Gold", hex: "#D4AF37", usage: "Hardware & accents" },
      { name: "Marble White", hex: "#F5F5F5", usage: "Surfaces & flooring" },
      { name: "Velvet Green", hex: "#2D5A3D", usage: "Upholstery" },
      { name: "Blush Pink", hex: "#E8C4C4", usage: "Soft furnishings" },
    ],
    wallPaint: { primary: "Champagne (#F7E7CE)", accent: "Navy Blue (#1B365D)", ceiling: "Warm White with crown molding", finish: "Satin for walls, high-gloss for trim" },
    flooring: { recommendation: "Italian marble or large format porcelain with marble effect", color: "Calacatta gold veining on white", material: "Natural marble or premium porcelain 800×800mm" },
    furniture: [
      { name: "Tufted Velvet Sofa", placement: "Focal point of room", size: "260cm × 100cm × 85cm", material: "Emerald velvet with gold metal legs" },
      { name: "Marble Coffee Table", placement: "Center of room", size: "120cm × 70cm × 40cm", material: "White marble top with brass base" },
      { name: "Accent Console", placement: "Behind sofa or entry wall", size: "160cm × 40cm × 80cm", material: "High-gloss lacquer with brass hardware" },
      { name: "Statement Armchair", placement: "Diagonal to sofa", size: "85cm × 85cm × 90cm", material: "Blush velvet with carved wood frame" },
    ],
    lighting: [
      { type: "Ambient", description: "Crystal chandelier or modern sputnik fixture", placement: "Ceiling center" },
      { type: "Task", description: "Brass table lamps with silk shades", placement: "Console and side tables" },
      { type: "Accent", description: "Wall sconces with crystal details", placement: "Flanking mirror or artwork" },
    ],
    decor: [
      { category: "Curtains", items: ["Floor-length silk or velvet drapes", "Gold tiebacks with crystal details"] },
      { category: "Rugs", items: ["Hand-knotted silk rug with subtle pattern", "Layered over larger neutral base"] },
      { category: "Wall Art", items: ["Gilded frame mirrors", "Original art in ornate frames"] },
      { category: "Plants", items: ["Orchids in ceramic planters", "Topiary in brass stands"] },
    ],
    summary: "An opulent Luxury Modern design that combines rich textures, premium materials, and refined details to create a sophisticated, hotel-inspired living space.",
  },
];

export function generateDesign(imageAnalysis: ImageAnalysis, preferredStyle?: string, budgetLevel?: string): DesignData {
  // Select template based on image properties
  let templateIndex = 0;
  
  if (preferredStyle) {
    const styleMap: Record<string, number> = {
      'Modern': 0,
      'Minimalist': 3,
      'Contemporary': 0,
      'Luxury': 4,
      'Scandinavian': 0,
      'Industrial': 1,
      'Bohemian': 2,
    };
    templateIndex = styleMap[preferredStyle] ?? 0;
  } else {
    // Auto-detect based on image
    if (imageAnalysis.brightness > 0.7 && imageAnalysis.saturation < 0.3) {
      templateIndex = 3; // Minimalist for bright, low saturation
    } else if (imageAnalysis.hasWarmTones && imageAnalysis.complexity > 0.6) {
      templateIndex = 2; // Bohemian for warm, complex images
    } else if (imageAnalysis.contrast > 0.5 && imageAnalysis.saturation < 0.4) {
      templateIndex = 1; // Industrial for high contrast, low saturation
    } else if (imageAnalysis.brightness > 0.6 && imageAnalysis.warmth > 0.4) {
      templateIndex = 0; // Scandinavian for bright, warm images
    } else {
      templateIndex = 4; // Luxury for everything else
    }
  }

  const template = designTemplates[templateIndex];
  
  // Modify colors based on image analysis
  const adjustedColors = adjustColorsForImage(template.colors, imageAnalysis);
  
  // Generate furniture with prices based on budget
  const furnitureWithPrices = template.furniture.map(f => ({
    ...f,
    estimatedPrice: generatePrice(budgetLevel || 'medium'),
  }));

  // Generate lighting with icons
  const lightingWithIcons = template.lighting.map(l => ({
    ...l,
    icon: getLightingIcon(l.type),
  }));

  // Generate decor with icons
  const decorWithIcons = template.decor.map(d => ({
    ...d,
    icon: getDecorIcon(d.category),
  }));

  // Generate budget breakdown
  const budgetBreakdown = generateBudget(budgetLevel || 'medium');

  return {
    designSummary: template.summary,
    recommendedStyle: template.style,
    colorPalette: adjustedColors,
    wallPaint: {
      primaryColor: template.wallPaint.primary,
      accentColor: template.wallPaint.accent,
      ceilingColor: template.wallPaint.ceiling,
      finish: template.wallPaint.finish,
    },
    furniture: furnitureWithPrices,
    lighting: lightingWithIcons,
    decor: decorWithIcons,
    flooring: template.flooring,
    budget: budgetBreakdown,
    analysis: generateRoomAnalysis(imageAnalysis),
  };
}

function adjustColorsForImage(colors: ColorItem[], analysis: ImageAnalysis): ColorItem[] {
  // Shift colors slightly based on image warmth/coolness
  if (analysis.hasCoolTones) {
    return colors.map(c => ({
      ...c,
      hex: shiftColorTowardCool(c.hex),
    }));
  } else if (analysis.hasWarmTones) {
    return colors.map(c => ({
      ...c,
      hex: shiftColorTowardWarm(c.hex),
    }));
  }
  return colors;
}

function shiftColorTowardWarm(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  
  const newR = Math.min(255, r + 5);
  const newG = g;
  const newB = Math.max(0, b - 5);
  
  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`.toUpperCase();
}

function shiftColorTowardCool(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  
  const newR = Math.max(0, r - 5);
  const newG = g;
  const newB = Math.min(255, b + 5);
  
  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`.toUpperCase();
}

function generatePrice(budget: string): string {
  const ranges: Record<string, string[]> = {
    low: ['₹8,000 - ₹15,000', '₹5,000 - ₹12,000', '₹12,000 - ₹20,000', '₹15,000 - ₹25,000', '₹3,000 - ₹6,000'],
    medium: ['₹25,000 - ₹45,000', '₹15,000 - ₹25,000', '₹35,000 - ₹55,000', '₹40,000 - ₹65,000', '₹8,000 - ₹15,000'],
    high: ['₹80,000 - ₹1,50,000', '₹40,000 - ₹70,000', '₹1,00,000 - ₹1,80,000', '₹1,20,000 - ₹2,00,000', '₹20,000 - ₹40,000'],
    luxury: ['₹2,00,000 - ₹4,00,000', '₹1,00,000 - ₹2,00,000', '₹2,50,000 - ₹5,00,000', '₹3,00,000 - ₹6,00,000', '₹50,000 - ₹1,00,000'],
  };
  const prices = ranges[budget] || ranges.medium;
  return prices[Math.floor(Math.random() * prices.length)];
}

function generateBudget(budget: string): { currency: string; range: string; breakdown: { category: string; amount: string }[] } {
  const budgets: Record<string, { range: string; breakdown: { category: string; amount: string }[] }> = {
    low: {
      range: '₹80,000 - ₹1,50,000',
      breakdown: [
        { category: 'Furniture', amount: '₹40,000 - ₹80,000' },
        { category: 'Lighting', amount: '₹8,000 - ₹15,000' },
        { category: 'Paint & Walls', amount: '₹8,000 - ₹15,000' },
        { category: 'Flooring', amount: '₹15,000 - ₹25,000' },
        { category: 'Curtains & Textiles', amount: '₹5,000 - ₹10,000' },
        { category: 'Decor & Accessories', amount: '₹4,000 - ₹8,000' },
      ],
    },
    medium: {
      range: '₹2,50,000 - ₹4,00,000',
      breakdown: [
        { category: 'Furniture', amount: '₹1,20,000 - ₹2,00,000' },
        { category: 'Lighting', amount: '₹25,000 - ₹45,000' },
        { category: 'Paint & Walls', amount: '₹15,000 - ₹25,000' },
        { category: 'Flooring', amount: '₹45,000 - ₹80,000' },
        { category: 'Curtains & Textiles', amount: '₹20,000 - ₹35,000' },
        { category: 'Decor & Accessories', amount: '₹15,000 - ₹30,000' },
      ],
    },
    high: {
      range: '₹5,00,000 - ₹8,00,000',
      breakdown: [
        { category: 'Furniture', amount: '₹2,50,000 - ₹4,00,000' },
        { category: 'Lighting', amount: '₹50,000 - ₹80,000' },
        { category: 'Paint & Walls', amount: '₹25,000 - ₹40,000' },
        { category: 'Flooring', amount: '₹1,00,000 - ₹1,50,000' },
        { category: 'Curtains & Textiles', amount: '₹40,000 - ₹60,000' },
        { category: 'Decor & Accessories', amount: '₹35,000 - ₹60,000' },
      ],
    },
    luxury: {
      range: '₹10,00,000 - ₹20,00,000+',
      breakdown: [
        { category: 'Furniture', amount: '₹5,00,000 - ₹10,00,000' },
        { category: 'Lighting', amount: '₹1,00,000 - ₹2,00,000' },
        { category: 'Paint & Walls', amount: '₹50,000 - ₹1,00,000' },
        { category: 'Flooring', amount: '₹2,00,000 - ₹4,00,000' },
        { category: 'Curtains & Textiles', amount: '₹80,000 - ₹1,50,000' },
        { category: 'Decor & Accessories', amount: '₹70,000 - ₹1,50,000' },
      ],
    },
  };
  
  const b = budgets[budget] || budgets.medium;
  return { currency: 'INR', ...b };
}

function getLightingIcon(type: string): string {
  const icons: Record<string, string> = {
    'Ambient': '💡',
    'Task': '🔦',
    'Decorative': '✨',
    'Accent': '🌟',
    'Natural': '☀️',
  };
  return icons[type] || '💡';
}

function getDecorIcon(category: string): string {
  const icons: Record<string, string> = {
    'Curtains': '🪟',
    'Rugs': '🟫',
    'Wall Art': '🖼️',
    'Plants': '🌿',
    'Mirrors': '🪞',
    'Decorative Objects': '🏺',
  };
  return icons[category] || '✨';
}

function generateRoomAnalysis(analysis: ImageAnalysis): {
  roomType: string;
  roomSize: string;
  existingFurniture: string[];
  wallCondition: string;
  flooring: string;
  lighting: string;
  windows: string;
  availableSpace: string;
} {
  // Infer room characteristics from image
  const brightness = analysis.brightness;
  const complexity = analysis.complexity;
  
  let roomType = 'Living Room';
  if (brightness > 0.7 && complexity < 0.3) roomType = 'Bedroom';
  else if (complexity > 0.7) roomType = 'Multi-purpose Space';
  else if (analysis.hasGreen) roomType = 'Sunroom / Garden Room';
  
  const sizeEstimate = brightness > 0.6 ? 'Approximately 280-350 sq ft' : 'Approximately 180-250 sq ft';
  
  const lightingDesc = brightness > 0.7
    ? 'Excellent natural light, well-lit space'
    : brightness > 0.5
    ? 'Moderate natural light, may need supplemental lighting'
    : 'Limited natural light, artificial lighting important';

  return {
    roomType,
    roomSize: sizeEstimate,
    existingFurniture: detectFurniture(analysis),
    wallCondition: brightness > 0.6 ? 'Good condition, light-colored walls' : 'May need repainting, darker walls detected',
    flooring: analysis.hasWarmTones ? 'Warm-toned flooring detected' : 'Neutral or cool-toned flooring',
    lighting: lightingDesc,
    windows: brightness > 0.6 ? 'Good window coverage detected' : 'Limited window area, consider adding mirrors',
    availableSpace: complexity > 0.6 ? 'Moderate open space after decluttering' : 'Good open floor area available',
  };
}

function detectFurniture(analysis: ImageAnalysis): string[] {
  const items: string[] = [];
  
  if (analysis.brightness < 0.5) {
    items.push('Dark furniture pieces');
  }
  if (analysis.complexity > 0.5) {
    items.push('Multiple furniture items');
  }
  if (analysis.hasWarmTones) {
    items.push('Wood-toned furniture');
  }
  if (analysis.saturation > 0.4) {
    items.push('Colored upholstery');
  }
  
  if (items.length === 0) {
    items.push('Basic furniture setup', 'Simple storage solutions');
  }
  
  return items;
}
