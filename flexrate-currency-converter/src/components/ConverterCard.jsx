import React from "react";
// 1. Import your custom hook and the row component
import { useCurrency } from "../hooks/useCurrency";
import CurrencyInput from "./CurrencyInput";

const ConverterCard = () => {
  // 2. Instead of creating state here, we "borrow" it from our hook
  const {
    amount, setAmount,
    fromCurrency, setFromCurrency,
    toCurrency, setToCurrency,
    convertedAmount,
    rates,
    swap
  } = useCurrency();

  // 3. Get all currency codes (USD, NGN, etc.) from the API data
  const currencies = Object.keys(rates);

  return (
    <div className="w-full max-w-md bg-white dark:bg-slate-800 shadow-2xl rounded-3xl p-6">
      <h2 className="text-xl font-bold mb-6 dark:text-white text-center">
        Currency Converter
      </h2>

      {/* 4. Use our reusable CurrencyInput for the "From" row */}
      <CurrencyInput
        label="From"
        amount={amount}
        currency={fromCurrency}
        currencies={currencies}
        onAmountChange={setAmount}
        onCurrencyChange={setFromCurrency}
      />

      {/* 5. The Swap Button (Matches your design) */}
      <div className="flex justify-center -my-4 relative z-10">
        <button 
          onClick={swap}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-transform active:scale-90"
        >
          ⇅
        </button>
      </div>

      {/* 6. Use our reusable CurrencyInput for the "To" row */}
      <CurrencyInput
        label="To"
        amount={convertedAmount} // This comes calculated from the hook!
        currency={toCurrency}
        currencies={currencies}
        onAmountChange={() => {}} // "To" is usually read-only
        onCurrencyChange={setToCurrency}
      />

      <button className="w-full bg-[#22c55e] hover:bg-green-600 text-white font-bold py-4 rounded-2xl mt-6 transition-all shadow-md">
        Convert
      </button>
    </div>
  );
};

export default ConverterCard;