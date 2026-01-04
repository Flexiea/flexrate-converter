import { useState } from "react";
import CurrencyRow from "./CurrencyRow";
import { useExchangeRates } from "../hooks/useExchangeRates";

function ConverterCard() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const { rates, loading, error } = useExchangeRates(fromCurrency);

  const rate = rates?.[toCurrency];

  const isUnsupported =
    (fromCurrency === "NGN" || toCurrency === "NGN") &&
    rates &&
    !rates["NGN"];

  const convertedAmount =
    !isUnsupported && amount && rate
      ? (amount * rate).toFixed(2)
      : "";

  function swapCurrencies() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  return (
    <section className="converter-card">
      <h2>Currency Converter</h2>

      {error && <p className="error">{error}</p>}

      {isUnsupported && (
        <p className="error">
          NGN is not supported by the current exchange rate provider.
        </p>
      )}

      <CurrencyRow
        label="From"
        currency={fromCurrency}
        amount={amount}
        onCurrencyChange={setFromCurrency}
        onAmountChange={setAmount}
      />

      <button className="swap-btn" onClick={swapCurrencies}>
        ⇅
      </button>

      <CurrencyRow
        label="To"
        currency={toCurrency}
        amount={convertedAmount}
        onCurrencyChange={setToCurrency}
        readOnly={isUnsupported}
      />

      {loading && <small>Fetching latest rates…</small>}
    </section>
  );
}

export default ConverterCard;
