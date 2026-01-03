function CurrencyRow({
  label,
  currency,
  amount,
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
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="NGN">NGN</option>
          <option value="GBP">GBP</option>
        </select>

        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange?.(e.target.value)}
          placeholder="0.00"
          readOnly={readOnly}
        />
      </div>
    </div>
  );
}

export default CurrencyRow;
