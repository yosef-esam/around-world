import { useState, useEffect } from "react";

export const useFetchdata = (country) => {
  const [contryList, setContryList] = useState([]);
  const [filteredcountries, setfilteredcountries] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);
  useEffect(() => {
    if (country) {
      fethdataFromApi();
    } else {
      fethdataFromLocalStorage();
    }
  }, []);
  const fethdataFromApi = () => {
    let url = "https://restcountries.com/v3.1/all";
    setisLoading(true);
    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}`;
    }

    fetch(url)
      .then((resbonse) => resbonse.json())
      .then((data) => {
        if (country) {
          setContryList(data[0]);
        } else {
          setContryList(data);
          setfilteredcountries(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })
      .catch(() => setisError(true))
      .finally(() => setisLoading(false));
  };
  const fethdataFromLocalStorage = () => {
    setisLoading(false);
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
      setContryList(data);
      setfilteredcountries(data);
    } else {
      fethdataFromApi();
    }
  };

  return {
    contryList,
    isError,
    isLoading,
    filteredcountries,
    setfilteredcountries,
  };
};
