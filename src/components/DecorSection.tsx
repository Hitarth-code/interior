import { DecorItem } from '../types';

interface Props {
  decor: DecorItem[];
}

export default function DecorSection({ decor }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <span className="text-2xl">🖼️</span>
        Decor & Accessories
      </h3>
      
      <div className="space-y-4">
        {decor.map((item, index) => (
          <div key={index} className="p-4 bg-slate-50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{item.icon}</span>
              <h4 className="font-semibold text-slate-700">{item.category}</h4>
            </div>
            <ul className="space-y-1.5 ml-8">
              {item.items.map((subItem, subIndex) => (
                <li key={subIndex} className="text-sm text-slate-500 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 flex-shrink-0"></span>
                  {subItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
