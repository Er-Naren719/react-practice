import { useEffect, useState } from "react"

const useCurrencyInfo = (currency) => {
  const [currencyData, setCurrencyData] = useState({});

  useEffect(() => {
    // Use the provided API response structure
    fetch(`https://api.frankfurter.app/latest?from=${currency}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Add the base currency with value 1 to ensure conversion to itself works
        setCurrencyData({
          ...data.rates,
          [currency.toUpperCase()]: 1 // Add the base currency itself
        });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [currency]);

  return currencyData;
};

export default useCurrencyInfo;