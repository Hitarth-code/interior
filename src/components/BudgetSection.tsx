import { BudgetInfo } from '../types';

interface Props {
  budget: BudgetInfo;
}

export default function BudgetSection({ budget }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <span className="text-2xl">💰</span>
        Estimated Budget
      </h3>
      
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 mb-6">
        <p className="text-xs font-medium text-amber-600 uppercase tracking-wider">Total Estimated Range</p>
        <p className="text-3xl font-bold text-slate-800 mt-1">{budget.range}</p>
        <p className="text-xs text-slate-400 mt-1">Currency: {budget.currency} (₹)</p>
      </div>
      
      <div className="space-y-3">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Breakdown</p>
        {budget.breakdown.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
            <span className="text-sm text-slate-600">{item.category}</span>
            <span className="text-sm font-medium text-slate-800">{item.amount}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-3 bg-blue-50 rounded-xl">
        <p className="text-xs text-blue-600">
          💡 <strong>Tip:</strong> These are estimated ranges. Actual costs may vary based on brand choices, local availability, and installation charges.
        </p>
      </div>
    </div>
  );
}
