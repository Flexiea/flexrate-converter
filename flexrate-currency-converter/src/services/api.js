export async function fetchRates(baseCurrency) {
  const response = await fetch(
    `https://api.exchangerate.host/latest?base=${baseCurrency}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exchange rates");
  }

  const data = await response.json();
  return data.rates;
}
