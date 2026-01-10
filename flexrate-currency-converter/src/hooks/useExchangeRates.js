import { useEffect, useState } from "react";

export function useExchangeRates(baseCurrency) {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!baseCurrency) return;

    async function fetchRates() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://open.er-api.com/v6/latest/${baseCurrency}`
        );
        const data = await res.json();

        console.log("API RESPONSE:", data);

        if (data.result !== "success") {
          throw new Error("Failed to fetch exchange rates");
        }

        // ✅ CORRECT PROPERTY FOR THIS API
        setRates(data.rates);
      } catch (err) {
        setError(err.message);
        setRates({});
      } finally {
        setLoading(false);
      }
    }

    fetchRates();
  }, [baseCurrency]);

  return { rates, loading, error };
}
