import { DesignData } from '../types';

interface Props {
  data: DesignData;
}

export default function DesignRecommendation({ data }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <span className="text-2xl">🎨</span>
        Design Recommendation
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Style */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5">
          <p className="text-xs font-medium text-amber-600 uppercase tracking-wider mb-1">Recommended Style</p>
          <p className="text-2xl font-bold text-slate-800">{data.recommendedStyle}</p>
          <p className="text-sm text-slate-500 mt-2">Clean lines, natural materials, and a warm neutral palette with organic textures</p>
        </div>

        {/* Wall Paint */}
        <div className="bg-slate-50 rounded-xl p-5">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Wall Paint</p>
          <div className="space-y-2.5">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Primary</span>
              <span className="text-sm font-medium text-slate-800">{data.wallPaint.primaryColor}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Accent</span>
              <span className="text-sm font-medium text-slate-800">{data.wallPaint.accentColor}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Ceiling</span>
              <span className="text-sm font-medium text-slate-800">{data.wallPaint.ceilingColor}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Finish</span>
              <span className="text-sm font-medium text-slate-800">{data.wallPaint.finish}</span>
            </div>
          </div>
        </div>

        {/* Flooring */}
        <div className="bg-slate-50 rounded-xl p-5">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Flooring</p>
          <p className="text-sm text-slate-700 font-medium">{data.flooring.recommendation}</p>
          <div className="mt-3 flex gap-4">
            <div>
              <p className="text-xs text-slate-400">Color</p>
              <p className="text-sm font-medium text-slate-700">{data.flooring.color}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Material</p>
              <p className="text-sm font-medium text-slate-700">{data.flooring.material}</p>
            </div>
          </div>
        </div>

        {/* Available Styles */}
        <div className="bg-slate-50 rounded-xl p-5">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Other Styles to Consider</p>
          <div className="flex flex-wrap gap-2">
            {['Modern', 'Minimalist', 'Contemporary', 'Luxury', 'Scandinavian', 'Industrial', 'Bohemian'].map((style) => (
              <span
                key={style}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  style === data.recommendedStyle.split(' ')[0] || style === data.recommendedStyle.split(' ')[1]
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-white text-slate-500 border border-slate-200'
                }`}
              >
                {style}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
