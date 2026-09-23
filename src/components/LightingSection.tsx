import { LightingItem } from '../types';

interface Props {
  lighting: LightingItem[];
}

export default function LightingSection({ lighting }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <span className="text-2xl">💡</span>
        Lighting Plan
      </h3>
      
      <div className="space-y-4">
        {lighting.map((item, index) => (
          <div key={index} className="flex gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-slate-700">{item.type}</h4>
                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full font-medium">
                  {item.type}
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-1">{item.description}</p>
              <p className="text-xs text-slate-400 mt-1">📍 {item.placement}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
