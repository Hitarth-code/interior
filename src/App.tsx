import { useState } from 'react';
import Header from './components/Header';
import UploadSection from './components/UploadSection';
import AnalysisSection from './components/AnalysisSection';
import DesignRecommendation from './components/DesignRecommendation';
import ColorPalette from './components/ColorPalette';
import FurnitureSection from './components/FurnitureSection';
import LightingSection from './components/LightingSection';
import DecorSection from './components/DecorSection';
import BudgetSection from './components/BudgetSection';
import DesignVisualization from './components/DesignVisualization';
import Footer from './components/Footer';
import { DesignData } from './types';
import { sampleDesignData } from './data/sampleData';

export default function App() {
  const [step, setStep] = useState<'upload' | 'analyzing' | 'results'>('upload');
  const [designData, setDesignData] = useState<DesignData | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string>('Modern');
  const [budget, setBudget] = useState<string>('medium');

  const handleAnalyze = () => {
    setStep('analyzing');
    setTimeout(() => {
      setDesignData(sampleDesignData);
      setStep('results');
    }, 3000);
  };

  const handleReset = () => {
    setStep('upload');
    setDesignData(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <Header />
      
      {step === 'upload' && (
        <UploadSection
          onAnalyze={handleAnalyze}
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
          budget={budget}
          setBudget={setBudget}
        />
      )}

      {step === 'analyzing' && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          <h2 className="mt-8 text-2xl font-bold text-slate-800">Analyzing Your Space...</h2>
          <p className="mt-3 text-slate-500 text-center max-w-md">
            Our AI is examining room dimensions, lighting conditions, existing furniture, and structural elements to create your perfect design.
          </p>
          <div className="mt-6 flex gap-2">
            {['Detecting room type', 'Analyzing lighting', 'Evaluating space', 'Generating design'].map((item, i) => (
              <span
                key={item}
                className="px-3 py-1 text-xs rounded-full bg-amber-100 text-amber-700 animate-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {step === 'results' && designData && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex justify-between items-center mb-8 pt-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Your Design is Ready!</h2>
              <p className="text-slate-500 mt-1">Complete interior redesign recommendation</p>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors font-medium"
            >
              Start Over
            </button>
          </div>

          <DesignVisualization data={designData} />
          
          <div className="mt-12">
            <DesignRecommendation data={designData} />
          </div>

          <div className="mt-12">
            <ColorPalette colors={designData.colorPalette} />
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FurnitureSection furniture={designData.furniture} />
            <LightingSection lighting={designData.lighting} />
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DecorSection decor={designData.decor} />
            <BudgetSection budget={designData.budget} />
          </div>

          <div className="mt-12">
            <AnalysisSection analysis={designData.analysis} />
          </div>
        </div>
      )}
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
