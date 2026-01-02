function ConverterCard() {
  return (
    <section className="converter-card">
      <h2>Currency Converter</h2>

      <div className="field">
        <label>From</label>
        <div className="input-row">
          <select>
            <option>USD</option>
          </select>
          <input type="number" placeholder="0.00" />
        </div>
      </div>

      <button className="swap-btn">⇅</button>

      <div className="field">
        <label>To</label>
        <div className="input-row">
          <select>
            <option>EUR</option>
          </select>
          <input type="number" placeholder="0.00" />
        </div>
      </div>

      <button className="convert-btn">Convert</button>
    </section>
  );
}

export default ConverterCard;
