
import React, { useState } from 'react';
import { SERVICES } from '../constants';

const CostEstimator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [treatment, setTreatment] = useState('');
  const [extent, setExtent] = useState<number | string>(1);
  const [financing, setFinancing] = useState('full');

  const calculateEstimate = () => {
    let base = 0;
    if (treatment === 'veneers') base = 1500 * Number(extent);
    else if (treatment === 'whitening') base = extent === 'in-office' ? 650 : 350;
    else if (treatment === 'invisalign') {
      if (extent === 'mild') base = 3500;
      else if (extent === 'moderate') base = 5000;
      else base = 6500;
    }

    if (financing === 'full') return base * 0.95; // 5% discount
    if (financing === '12m') return base / 12;
    if (financing === '24m') return base / 24;
    return base;
  };

  const currentTotal = () => {
    let base = 0;
    if (treatment === 'veneers') base = 1500 * Number(extent);
    else if (treatment === 'whitening') base = extent === 'in-office' ? 650 : 350;
    else if (treatment === 'invisalign') {
      if (extent === 'mild') base = 3500;
      else if (extent === 'moderate') base = 5000;
      else base = 6500;
    }
    return base;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto">
      <div className="bg-medical-blue p-6 text-white">
        <h3 className="text-xl font-bold">Smile Investment Estimator</h3>
        <p className="text-blue-100 text-sm">Get an instant look at your potential treatment costs.</p>
        <div className="flex mt-6 space-x-2">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className={`h-1 flex-1 rounded-full ${s <= step ? 'bg-white' : 'bg-blue-400'}`}></div>
          ))}
        </div>
      </div>

      <div className="p-8">
        {step === 1 && (
          <div className="animate-fadeIn">
            <h4 className="font-semibold mb-4">Step 1: Select Treatment</h4>
            <div className="grid grid-cols-2 gap-4">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setTreatment(s.id); setStep(2); }}
                  className={`p-4 border-2 rounded-xl text-left transition-all ${treatment === s.id ? 'border-medical-blue bg-blue-50' : 'border-gray-100 hover:border-blue-200'}`}
                >
                  <p className="font-bold text-charcoal">{s.title}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fadeIn">
            <h4 className="font-semibold mb-4">Step 2: Selection Detail</h4>
            {treatment === 'veneers' && (
              <div>
                <label className="block text-sm mb-2">Number of Teeth</label>
                <select
                  value={extent}
                  onChange={(e) => setExtent(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100"
                >
                  {[1, 2, 4, 6, 8, 10, 12].map(n => <option key={n} value={n}>{n} Veneers</option>)}
                </select>
              </div>
            )}
            {treatment === 'whitening' && (
              <div className="space-y-3">
                <button onClick={() => setExtent('in-office')} className={`w-full p-3 border rounded-lg text-left ${extent === 'in-office' ? 'bg-blue-50 border-blue-500' : 'border-gray-200'}`}>In-Office (Instant)</button>
                <button onClick={() => setExtent('take-home')} className={`w-full p-3 border rounded-lg text-left ${extent === 'take-home' ? 'bg-blue-50 border-blue-500' : 'border-gray-200'}`}>Take-Home Kit</button>
              </div>
            )}
            {treatment === 'invisalign' && (
              <div className="space-y-3">
                <button onClick={() => setExtent('mild')} className={`w-full p-3 border rounded-lg text-left ${extent === 'mild' ? 'bg-blue-50 border-blue-500' : 'border-gray-200'}`}>Mild Correction</button>
                <button onClick={() => setExtent('moderate')} className={`w-full p-3 border rounded-lg text-left ${extent === 'moderate' ? 'bg-blue-50 border-blue-500' : 'border-gray-200'}`}>Moderate Correction</button>
                <button onClick={() => setExtent('complex')} className={`w-full p-3 border rounded-lg text-left ${extent === 'complex' ? 'bg-blue-50 border-blue-500' : 'border-gray-200'}`}>Complex Case</button>
              </div>
            )}
            {treatment === 'makeover' && (
              <div className="text-center py-4">
                <p className="text-gray-600 italic">Smile makeovers are highly personalized. A custom assessment is required for pricing.</p>
                <button onClick={() => setStep(4)} className="mt-4 text-medical-blue font-bold">Skip to Consultation</button>
              </div>
            )}
            <div className="flex space-x-4 mt-8">
              <button onClick={() => setStep(1)} className="px-6 py-2 border rounded-lg">Back</button>
              <button onClick={() => setStep(3)} className="flex-1 py-2 bg-medical-blue text-white rounded-lg">Continue</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fadeIn">
            <h4 className="font-semibold mb-4">Step 3: Financing Options</h4>
            <div className="space-y-3">
              <button onClick={() => setFinancing('full')} className={`w-full p-4 border rounded-xl text-left flex justify-between items-center ${financing === 'full' ? 'bg-blue-50 border-blue-500' : 'border-gray-200'}`}>
                <span>Pay in Full <span className="text-xs text-green-600 block">5% Early Payment Discount</span></span>
                <span className="font-bold">${(currentTotal() * 0.95).toLocaleString()}</span>
              </button>
              <button onClick={() => setFinancing('12m')} className={`w-full p-4 border rounded-xl text-left flex justify-between items-center ${financing === '12m' ? 'bg-blue-50 border-blue-500' : 'border-gray-200'}`}>
                <span>12 Months (0% Interest)</span>
                <span className="font-bold">${(currentTotal() / 12).toFixed(2)}/mo</span>
              </button>
              <button onClick={() => setFinancing('24m')} className={`w-full p-4 border rounded-xl text-left flex justify-between items-center ${financing === '24m' ? 'bg-blue-50 border-blue-500' : 'border-gray-200'}`}>
                <span>24 Months</span>
                <span className="font-bold">${(currentTotal() / 24).toFixed(2)}/mo</span>
              </button>
            </div>
            <div className="flex space-x-4 mt-8">
              <button onClick={() => setStep(2)} className="px-6 py-2 border rounded-lg">Back</button>
              <button onClick={() => setStep(4)} className="flex-1 py-2 bg-trust-gold text-white rounded-lg">Show Results</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center animate-scaleIn">
            <div className="w-16 h-16 bg-blue-100 text-medical-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            </div>
            <h4 className="text-2xl font-bold mb-2">Estimated Investment</h4>
            <p className="text-4xl font-black text-medical-blue mb-2">
              {financing === 'full' ? `$${(currentTotal() * 0.95).toLocaleString()}` : `$${(currentTotal() / (financing === '12m' ? 12 : 24)).toFixed(2)}/mo`}
            </p>
            <p className="text-gray-500 text-sm mb-8">
              {financing === 'full' ? 'Total with 5% discount applied.' : `Based on a ${financing === '12m' ? '12' : '24'}-month payment plan.`}
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-left mb-8">
              <p className="text-xs font-bold text-gray-400 uppercase mb-2">Important Disclaimer</p>
              <p className="text-xs text-gray-500">This is a preliminary estimate only. Exact pricing will be determined during your clinical consultation based on your specific oral health needs and cosmetic goals.</p>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#/book" className="w-full py-3 bg-medical-blue text-white rounded-lg font-bold shadow-lg shadow-blue-200">Get Exact Quote - Book Consultation</a>
              <button onClick={() => setStep(1)} className="text-sm text-gray-500">Restart Calculator</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostEstimator;
