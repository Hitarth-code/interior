export interface ColorItem {
  name: string;
  hex: string;
  usage: string;
}

export interface FurnitureItem {
  name: string;
  placement: string;
  size: string;
  material: string;
  estimatedPrice: string;
}

export interface LightingItem {
  type: string;
  description: string;
  placement: string;
  icon: string;
}

export interface DecorItem {
  category: string;
  items: string[];
  icon: string;
}

export interface BudgetInfo {
  currency: string;
  range: string;
  breakdown: { category: string; amount: string }[];
}

export interface RoomAnalysis {
  roomType: string;
  roomSize: string;
  existingFurniture: string[];
  wallCondition: string;
  flooring: string;
  lighting: string;
  windows: string;
  availableSpace: string;
}

export interface DesignData {
  designSummary: string;
  recommendedStyle: string;
  colorPalette: ColorItem[];
  wallPaint: {
    primaryColor: string;
    accentColor: string;
    ceilingColor: string;
    finish: string;
  };
  furniture: FurnitureItem[];
  lighting: LightingItem[];
  decor: DecorItem[];
  flooring: {
    recommendation: string;
    color: string;
    material: string;
  };
  budget: BudgetInfo;
  analysis: RoomAnalysis;
}
