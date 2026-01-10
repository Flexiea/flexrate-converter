function CurrencyRow({
  label,
  currency,
  amount,
  currencies,
  onCurrencyChange,
  onAmountChange,
  readOnly = false,
}) {
  return (
    <div className="field">
      <label>{label}</label>

      <div className="input-row">
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencies.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={amount}
          onChange={
            readOnly ? undefined : (e) => onAmountChange(e.target.value)
          }
          placeholder="0.00"
          readOnly={readOnly}
        />
      </div>
    </div>
  );
}

export default CurrencyRow;
