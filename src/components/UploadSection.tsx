import { useState, useRef } from 'react';

interface Props {
  onAnalyze: () => void;
  selectedStyle: string;
  setSelectedStyle: (style: string) => void;
  budget: string;
  setBudget: (budget: string) => void;
}

const styles = ['Modern', 'Minimalist', 'Contemporary', 'Luxury', 'Scandinavian', 'Industrial', 'Bohemian'];
const budgets = [
  { value: 'low', label: 'Budget Friendly', range: '₹50K - ₹1.5L' },
  { value: 'medium', label: 'Mid Range', range: '₹1.5L - ₹3.5L' },
  { value: 'high', label: 'Premium', range: '₹3.5L - ₹7L' },
  { value: 'luxury', label: 'Luxury', range: '₹7L+' },
];

export default function UploadSection({ onAnalyze, selectedStyle, setSelectedStyle, budget, setBudget }: Props) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Redesign Your Room with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">AI</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Upload a photo of your room and let our AI analyze it to provide personalized interior design recommendations, color palettes, furniture suggestions, and budget estimates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Area */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
            <span className="w-7 h-7 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            Upload Your Room Photo
          </h3>
          
          <div
            className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer ${
              uploadedImage
                ? 'border-amber-300 bg-amber-50/50'
                : 'border-slate-200 hover:border-amber-300 hover:bg-amber-50/30'
            }`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            
            {uploadedImage ? (
              <div className="space-y-4">
                <img
                  src={uploadedImage}
                  alt="Uploaded room"
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
                <p className="text-sm text-amber-600 font-medium">✓ Image uploaded successfully</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setUploadedImage(null);
                  }}
                  className="text-xs text-slate-400 hover:text-red-500"
                >
                  Remove & upload different image
                </button>
              </div>
            ) : (
              <div className="py-8">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-slate-600 font-medium">Drop your room photo here</p>
                <p className="text-sm text-slate-400 mt-1">or click to browse files</p>
                <p className="text-xs text-slate-300 mt-3">Supports JPG, PNG, WebP • Max 10MB</p>
              </div>
            )}
          </div>
        </div>

        {/* Settings */}
        <div className="space-y-6">
          {/* Style Selection */}
          <div>
            <h3 className="text-lg font-semibold text-slate-700 flex items-center gap-2 mb-4">
              <span className="w-7 h-7 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Choose Your Style
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    selectedStyle === style
                      ? 'bg-amber-500 text-white shadow-md shadow-amber-200'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Selection */}
          <div>
            <h3 className="text-lg font-semibold text-slate-700 flex items-center gap-2 mb-4">
              <span className="w-7 h-7 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Set Your Budget
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {budgets.map((b) => (
                <button
                  key={b.value}
                  onClick={() => setBudget(b.value)}
                  className={`p-3 rounded-xl text-left transition-all border-2 ${
                    budget === b.value
                      ? 'border-amber-400 bg-amber-50'
                      : 'border-slate-100 hover:border-slate-200 bg-white'
                  }`}
                >
                  <p className={`text-sm font-semibold ${budget === b.value ? 'text-amber-700' : 'text-slate-700'}`}>
                    {b.label}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{b.range}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Analyze Button */}
          <button
            onClick={onAnalyze}
            className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl font-semibold text-lg hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-amber-200 hover:shadow-xl hover:shadow-amber-300 active:scale-[0.98]"
          >
            ✨ Analyze My Room
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: '🎨', title: 'Color Palette', desc: 'AI-recommended colors that harmonize with your space' },
          { icon: '🛋️', title: 'Furniture Layout', desc: 'Optimal furniture placement for functionality & aesthetics' },
          { icon: '💰', title: 'Budget Planning', desc: 'Detailed cost breakdown in your currency' },
        ].map((feature) => (
          <div key={feature.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h4 className="font-semibold text-slate-700">{feature.title}</h4>
            <p className="text-sm text-slate-400 mt-1">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
