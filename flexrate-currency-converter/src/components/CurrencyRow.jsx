import React from 'react';
const CurrencyInput = ({ label, amount, currency, currencies = [], onAmountChange, onCurrencyChange }) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="text-sm font-medium text-gray-400">{label}</label>
      <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-slate-800 rounded-xl">
        <select 
          value={currency} 
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="bg-transparent font-bold outline-none cursor-pointer dark:text-white"
        >
          {/* If currencies is empty, show a loading option */}
          {currencies.length === 0 ? (
            <option>Loading...</option>
          ) : (
            currencies.map((code) => (
              <option key={code} value={code}>{code}</option>
            ))
          )}
        </select>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => onAmountChange(e.target.value)}
          className="bg-transparent text-right outline-none dark:text-white"
        />
      </div>
    </div>
  );
};
  export default CurrencyInput;