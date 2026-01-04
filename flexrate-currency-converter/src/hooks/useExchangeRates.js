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
          `https://api.frankfurter.app/latest?from=${baseCurrency}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch rates");
        }

        const data = await res.json();
        setRates(data.rates);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRates();
  }, [baseCurrency]);

  return { rates, loading, error };
}
