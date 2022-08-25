import React, { useEffect, useState } from "react";
import './App.css';
import CurrencyRow from "./CurrencyRow";

// var myHeaders = new Headers();
// myHeaders.append("apikey", "CVeXXdtVIE6BWEsNG8wb6nn96e0oPcnp");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

const BASE_URL = 'https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  console.log(currencyOptions)
  useEffect(() => {
    // fetch(BASE_URL, requestOptions)
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    
    // fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=IDR&base=EUR", requestOptions)
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));

    // fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .then(res => res.json())
    // .then(data => {
    //   setCurrencyOptions([data.base, ...Object.keys(data.rates)])
    // })
    // .catch(error => console.log('error', error));
    fetch("https://data.fixer.io/api/latest")
    .then(res => res.text())
    .then(result => console.log(result))
  }, [])
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow></CurrencyRow>
      <div className="equal">=</div>
      <CurrencyRow></CurrencyRow>
    </>
  )
}

export default App;