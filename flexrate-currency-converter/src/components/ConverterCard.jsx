import { useState } from "react";
import CurrencyRow from "./CurrencyRow";

function ConverterCard() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  return (
    <section className="converter-card">
      <h2>Currency Converter</h2>

      <CurrencyRow
        label="From"
        currency={fromCurrency}
        amount={amount}
        onCurrencyChange={setFromCurrency}
        onAmountChange={setAmount}
      />

      <button
        className="swap-btn"
        onClick={() => {
          setFromCurrency(toCurrency);
          setToCurrency(fromCurrency);
        }}
      >
        ⇅
      </button>

      <CurrencyRow
        label="To"
        currency={toCurrency}
        amount={amount}
        onCurrencyChange={setToCurrency}
        readOnly
      />

      <button className="convert-btn">Convert</button>
    </section>
  );
}

export default ConverterCard;
