function CurrencyRow({ label }) {
  return (
    <div className="field">
      <label>{label}</label>

      <div className="input-row">
        <select>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input type="number" placeholder="0.00" />
      </div>
    </div>
  );
}

export default CurrencyRow;
