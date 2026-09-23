import { DesignData } from '../types';

interface Props {
  data: DesignData;
}

export default function DesignVisualization({ data }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800">Design Visualization</h3>
            <p className="text-sm text-slate-400 mt-0.5">AI-generated room redesign concept</p>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            Style: {data.recommendedStyle}
          </span>
        </div>
      </div>
      
      <div className="relative">
        {/* AI-generated room visualization */}
        <div className="h-80 md:h-96 relative overflow-hidden">
          <img
            src="https://image.qwenlm.ai/generated-images/be5101bc-1a42-42ec-940b-9a03d8abbc92/_result.png"
            alt="AI-generated room redesign visualization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        {/* AI Prompt */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-xl p-3">
          <p className="text-xs text-white/60 mb-1">AI Image Prompt:</p>
          <p className="text-xs text-white/90">
            Photorealistic {data.recommendedStyle.toLowerCase()} living room, warm white walls with sage green accent, oak herringbone flooring, linen sectional sofa, round coffee table, pendant lighting, fiddle leaf fig plant, sheer curtains, natural light, 8K quality
          </p>
        </div>
      </div>
      
      {/* Design Summary */}
      <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50">
        <h4 className="font-semibold text-slate-700 mb-2">Design Summary</h4>
        <p className="text-sm text-slate-600 leading-relaxed">{data.designSummary}</p>
      </div>
    </div>
  );
}
