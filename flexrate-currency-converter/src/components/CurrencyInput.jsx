import React from 'react';

// We pass "props" (properties) to this component so it knows what to display
const CurrencyInput = ({ 
  label,           // "From" or "To"
  amount,          // The number value
  currency,        // The selected currency (e.g., "USD")
  currencies,      // The list of all currency names for the dropdown
  onAmountChange,  // Function to run when user types a number
  onCurrencyChange // Function to run when user picks a new currency
}) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      {/* Label: From or To */}
      <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {label}
      </label>

      {/* The Container for Select and Input */}
      <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-slate-800 rounded-xl">
        
        {/* Dropdown for Currencies */}
        <select 
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="bg-transparent font-bold text-lg outline-none cursor-pointer dark:text-white"
        >
          {currencies.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>

        {/* The Number Input */}
        <input 
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          className="bg-transparent text-right text-xl font-semibold outline-none w-full dark:text-white"
          placeholder="0.00"
        />
      </div>
    </div>
  );
};

export default CurrencyInput;