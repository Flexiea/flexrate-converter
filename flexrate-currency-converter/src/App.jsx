import React from 'react';
import CurrencyInput from './components/CurrencyInput'; // Match the file name exactly!
import { useCurrency } from './hooks/useCurrency';

function App() {
  // We grab all the "powers" from our custom hook
  const {
    amount, setAmount,
    fromCurrency, setFromCurrency,
    toCurrency, setToCurrency,
    convertedAmount,
    rates,
    swap
  } = useCurrency();

  // Get the list of currency codes (USD, EUR, etc.) from the rates object
  const currencyOptions = Object.keys(rates);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-max-w-md bg-white dark:bg-slate-800 shadow-2xl rounded-3xl p-6">
        
        <h1 className="text-2xl font-bold text-center mb-8 dark:text-white">
          Flexrate Converter
        </h1>

        {/* Top Input Row (From) */}
        <CurrencyInput
          label="From"
          amount={amount}
          currency={fromCurrency}
          currencies={currencyOptions}
          onAmountChange={setAmount}
          onCurrencyChange={setFromCurrency}
        />

        {/* Swap Button */}
        <div className="flex justify-center -my-2 relative z-10">
          <button 
            onClick={swap}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-transform active:scale-95"
          >
            ⇅
          </button>
        </div>

        {/* Bottom Input Row (To) */}
        <CurrencyInput
          label="To"
          amount={convertedAmount}
          currency={toCurrency}
          currencies={currencyOptions}
          onAmountChange={() => {}} // Usually "To" is read-only, or you'd add back-calc logic
          onCurrencyChange={setToCurrency}
        />

        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl mt-6 transition-colors">
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;