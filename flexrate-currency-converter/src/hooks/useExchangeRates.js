import { useState, useEffect } from "react";
import { getLatestRates } from "../services/api";

export const useCurrency = () => {
  // 1. These variables must be defined AT THE TOP of the hook
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD"); // <--- This must exist!
  const [toCurrency, setToCurrency] = useState("EUR");
  const [rates, setRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(0);

  
  useEffect(() => {
    const fetchRates = async () => {
      try {
    
        const data = await getLatestRates(fromCurrency); 
        if (data) {
          setRates(data);
        }
      } catch (error) {
        console.error("Error in hook:", error);
      }
    };
    fetchRates();
  }, [fromCurrency]); // Re-run when fromCurrency changes

  useEffect(() => {
    if (rates[toCurrency]) {
      setConvertedAmount((amount * rates[toCurrency]).toFixed(2));
    }
  }, [amount, toCurrency, rates]);

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