import { useState, useEffect } from "react";
import { getLatestRates } from "../services/api"; // This imports your API bridge

export const useCurrency = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [rates, setRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(0);

  // 1. Fetch rates when the "From" currency changes
  useEffect(() => {
    const fetchRates = async () => {
      const data = await getLatestRates(fromCurrency);
      if (data) {
        setRates(data);
      }
    };
    fetchRates();
  }, [fromCurrency]);

  // 2. Calculate the conversion whenever the amount or "To" currency changes
  useEffect(() => {
    if (rates[toCurrency]) {
      const result = (amount * rates[toCurrency]).toFixed(2);
      setConvertedAmount(result);
    }
  }, [amount, toCurrency, rates]);

  // 3. The "Swap" function for your middle button
  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return {
    amount, setAmount,
    fromCurrency, setFromCurrency,
    toCurrency, setToCurrency,
    convertedAmount,
    rates,
    swap
  };
};