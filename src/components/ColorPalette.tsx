import { ColorItem } from '../types';

interface Props {
  colors: ColorItem[];
}

export default function ColorPalette({ colors }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <span className="text-2xl">🎨</span>
        Color Palette
      </h3>
      
      {/* Color strip */}
      <div className="flex rounded-2xl overflow-hidden h-20 mb-6 shadow-inner">
        {colors.map((color) => (
          <div
            key={color.hex}
            className="flex-1 relative group cursor-pointer transition-all hover:flex-[2]"
            style={{ backgroundColor: color.hex }}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-mono font-bold bg-white/90 px-2 py-1 rounded shadow-sm" style={{ color: isLightColor(color.hex) ? '#333' : '#fff' }}>
                {color.hex}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Color details */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {colors.map((color) => (
          <div key={color.hex} className="text-center">
            <div
              className="w-12 h-12 rounded-xl mx-auto mb-2 shadow-sm border border-slate-100"
              style={{ backgroundColor: color.hex }}
            ></div>
            <p className="text-sm font-medium text-slate-700">{color.name}</p>
            <p className="text-xs text-slate-400 font-mono">{color.hex}</p>
            <p className="text-xs text-slate-400 mt-0.5">{color.usage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
}
