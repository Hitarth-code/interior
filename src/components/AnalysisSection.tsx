import { RoomAnalysis as RoomAnalysisType } from '../types';

interface Props {
  analysis: RoomAnalysisType;
}

export default function AnalysisSection({ analysis }: Props) {
  const items = [
    { label: 'Room Type', value: analysis.roomType, icon: '🏠' },
    { label: 'Room Size', value: analysis.roomSize, icon: '📐' },
    { label: 'Wall Condition', value: analysis.wallCondition, icon: '🧱' },
    { label: 'Flooring', value: analysis.flooring, icon: '🟫' },
    { label: 'Lighting', value: analysis.lighting, icon: '💡' },
    { label: 'Windows & Doors', value: analysis.windows, icon: '🪟' },
    { label: 'Available Space', value: analysis.availableSpace, icon: '📏' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <span className="text-2xl">🔍</span>
        Room Analysis
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.label} className="flex gap-3 p-4 bg-slate-50 rounded-xl">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl shadow-sm flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{item.label}</p>
              <p className="text-sm text-slate-700 mt-0.5">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Existing Furniture */}
      <div className="mt-6 p-4 bg-slate-50 rounded-xl">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Existing Furniture Detected</p>
        <div className="flex flex-wrap gap-2">
          {analysis.existingFurniture.map((item, index) => (
            <span key={index} className="px-3 py-1.5 bg-white rounded-lg text-sm text-slate-600 border border-slate-200">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
