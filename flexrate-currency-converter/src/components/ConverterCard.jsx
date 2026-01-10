import { useState } from "react";
import CurrencyRow from "./CurrencyRow";
import { useExchangeRates } from "../hooks/useExchangeRates";

function ConverterCard() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(0);

  const { rates, loading, error } = useExchangeRates(fromCurrency);

  const currencies = Object.keys(rates || {});

  const rate = rates[toCurrency];
  const convertedAmount =
    amount && rate ? (amount * rate).toFixed(2) : "";

  function swapCurrencies() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  return (
    <section className="converter-card">
      <h2>Currency Converter</h2>

      {error && <p className="error">{error}</p>}

      <CurrencyRow
        label="From"
        currency={fromCurrency}
        amount={amount}
        currencies={currencies}
        onCurrencyChange={setFromCurrency}
        onAmountChange={setAmount}
      />

      <button className="swap-btn" onClick={swapCurrencies}>
        ⇅
      </button>

      <CurrencyRow
        label="To"
        currency={toCurrency}
        amount={convertedAmount || ""}
        currencies={currencies}
        onCurrencyChange={setToCurrency}
        readOnly
      />

      {loading && <small>Fetching latest rates…</small>}
    </section>
  );
}

export default ConverterCard;
