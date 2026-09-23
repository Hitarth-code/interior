import { FurnitureItem } from '../types';

interface Props {
  furniture: FurnitureItem[];
}

export default function FurnitureSection({ furniture }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <span className="text-2xl">🛋️</span>
        Furniture Recommendations
      </h3>
      
      <div className="space-y-4">
        {furniture.map((item, index) => (
          <div key={index} className="bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-semibold text-slate-700">{item.name}</h4>
                <div className="mt-2 space-y-1.5">
                  <p className="text-xs text-slate-500">
                    <span className="font-medium text-slate-600">📍 Placement:</span> {item.placement}
                  </p>
                  <p className="text-xs text-slate-500">
                    <span className="font-medium text-slate-600">📐 Size:</span> {item.size}
                  </p>
                  <p className="text-xs text-slate-500">
                    <span className="font-medium text-slate-600">🪵 Material:</span> {item.material}
                  </p>
                </div>
              </div>
              <div className="text-right ml-4">
                <p className="text-xs text-slate-400">Est. Price</p>
                <p className="text-sm font-semibold text-amber-600">{item.estimatedPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
