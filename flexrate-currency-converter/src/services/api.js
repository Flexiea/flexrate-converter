export const getLatestRates = async (baseCurrency = "USD") => {
  try {
    const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`);
    const data = await response.json();
    return data.conversion_rates; 
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};