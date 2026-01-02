import CurrencyRow from "./CurrencyRow";

function ConverterCard() {
  return (
    <section className="converter-card">
      <h2>Currency Converter</h2>

      <CurrencyRow label="From" />

      <button className="swap-btn">⇅</button>

      <CurrencyRow label="To" />

      <button className="convert-btn">Convert</button>
    </section>
  );
}

export default ConverterCard;
