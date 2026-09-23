import { DesignData } from '../types';

interface Props {
  data: DesignData;
  uploadedImage: string | null;
}

export default function DesignVisualization({ data, uploadedImage }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800">Design Visualization</h3>
            <p className="text-sm text-slate-400 mt-0.5">AI-generated recommendations based on your room</p>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            Style: {data.recommendedStyle}
          </span>
        </div>
      </div>
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Original Room */}
          {uploadedImage && (
            <div className="relative h-64 md:h-80 overflow-hidden border-r border-slate-100">
              <img
                src={uploadedImage}
                alt="Your original room"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium">
                📷 Your Room
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          )}
          
          {/* Design Concept */}
          <div className={`relative h-64 md:h-80 overflow-hidden ${!uploadedImage ? 'md:col-span-2' : ''}`}>
            {/* CSS-based visualization based on recommended colors */}
            <div className="w-full h-full relative">
              {/* Wall background using recommended primary color */}
              <div 
                className="absolute top-0 left-0 right-0 h-3/5"
                style={{ backgroundColor: data.colorPalette[0]?.hex || '#FAF8F5' }}
              ></div>
              
              {/* Accent wall section */}
              <div 
                className="absolute top-0 left-1/4 right-1/4 h-3/5"
                style={{ backgroundColor: data.colorPalette[1]?.hex || '#8B9E82' }}
              ></div>
              
              {/* Floor using flooring color */}
              <div className="absolute bottom-0 left-0 right-0 h-2/5" style={{
                background: `linear-gradient(to bottom, ${data.colorPalette[2]?.hex || '#C4956A'}dd, ${data.colorPalette[2]?.hex || '#C4956A'})`,
              }}></div>
              
              {/* Furniture silhouettes */}
              <div className="absolute bottom-[28%] left-[10%] w-[35%] h-[18%] rounded-t-lg" style={{ backgroundColor: data.colorPalette[4]?.hex || '#F0E6D3' }}></div>
              <div className="absolute bottom-[25%] left-[38%] w-[15%] h-[8%] rounded-full" style={{ backgroundColor: data.colorPalette[2]?.hex || '#C4956A' }}></div>
              
              {/* Plant */}
              <div className="absolute bottom-[28%] right-[12%]">
                <div className="w-6 h-10 rounded-full" style={{ backgroundColor: data.colorPalette[5]?.hex || '#8B9E82' }}></div>
                <div className="w-3 h-4 mx-auto -mt-1 rounded-b-sm" style={{ backgroundColor: data.colorPalette[3]?.hex || '#3D3D3D' }}></div>
              </div>
              
              {/* Pendant light */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <div className="w-px h-8 mx-auto" style={{ backgroundColor: data.colorPalette[3]?.hex || '#3D3D3D' }}></div>
                <div className="w-8 h-6 rounded-b-full" style={{ backgroundColor: data.colorPalette[2]?.hex || '#C4956A' }}></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            
            <div className="absolute top-3 left-3 bg-amber-500/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium">
              ✨ AI Design Concept
            </div>
          </div>
        </div>
        
        {/* AI Prompt */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-xl p-3">
          <p className="text-xs text-white/60 mb-1">AI Design Prompt:</p>
          <p className="text-xs text-white/90">
            Photorealistic {data.recommendedStyle.toLowerCase()} room, {data.wallPaint.primaryColor} walls, {data.flooring.color} flooring, {data.furniture[0]?.material.toLowerCase() || 'premium furniture'}, {data.lighting[0]?.description.toLowerCase() || 'ambient lighting'}, natural elements, 8K quality
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
