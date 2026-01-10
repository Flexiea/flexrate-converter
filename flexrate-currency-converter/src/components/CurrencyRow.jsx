function getFlagEmoji(currencyCode) {
  const countryCodeMap = {
    USD: "US",
    EUR: "EU",
    GBP: "GB",
    NGN: "NG",
    CAD: "CA",
    AUD: "AU",
    JPY: "JP",
    CNY: "CN",
    INR: "IN",
    CHF: "CH",
  };

  const countryCode = countryCodeMap[currencyCode];
  if (!countryCode) return "🏳️";

  return countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt())
    );
}

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
              {getFlagEmoji(code)} {code}
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
