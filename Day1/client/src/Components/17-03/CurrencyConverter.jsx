import axios from "axios";
import React, { useEffect, useState } from "react";

const CurrencyConverter=()=>{
  const [disable,setdisable] = useState(true)
const [currencies,setCurrencies] = useState([]);
const [SelectedCurrency,SetSelectedCurrency] = useState({first : "", second : ""})
console.log(SelectedCurrency,"selectedCurrency")
const [convertedAmount,SetconvertedAmount] = useState(null)

const options = {
  method: 'GET',
  url: 'https://currency-exchange.p.rapidapi.com/listquotes',
  headers: {
    'X-RapidAPI-Key': '4a004fb5d5msh426f28877e299e1p190327jsn43baee44a7a7',
    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
  }
};



  async function getCurrencies(){
    try{
      const response = await axios.request(options);
      setCurrencies(response.data)
    }catch(error){
      console.log(error)
    }
  }

  function Handlechange(event){
    // console.log(event.target.value,event.target.name)
    SetSelectedCurrency({...SelectedCurrency,[event.target.name]: event.target.value})
  }

  async function Convert(){
    const options = {
      method: 'GET',
      url: 'https://currency-exchange.p.rapidapi.com/exchange',
      params: {
        from: SelectedCurrency.first,
        to: SelectedCurrency.second,
        q: '1.0'
      },
      headers: {
        'X-RapidAPI-Key': '4a004fb5d5msh426f28877e299e1p190327jsn43baee44a7a7',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
      }
    };
    
    try{
      const response = await axios.request(options);
      SetconvertedAmount(response.data);
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    if(SelectedCurrency.first && SelectedCurrency.second){
      setdisable(false)
    }
  },[SelectedCurrency])
 
  useEffect(()=>{
getCurrencies()
  },[])
return(
  <div>
  <div style={{display : "flex", justifyContent : 'space-around'}}>
  <div>
    <label>Select First Currency</label><br/>
  <select onChange={Handlechange} name="first">
    <option>Click here to Select First Currency</option>
    {currencies.map((c) =>(
    <option value={c}>{c}</option>
    ))}
  </select>
  </div>
  <div>
    <label>Select Second Currency</label><br/>
  <select onChange={Handlechange} name="second">
    <option>Click here to Select Second Currency</option>
    {currencies.map((c) =>(
    <option value={c}>{c}</option>
    ))}
  </select>
  </div>

</div>
<button disabled={disable} onClick={Convert}>Convert</button>
{convertedAmount && <div>1{SelectedCurrency.first}={convertedAmount} {SelectedCurrency.second}</div>}
</div>



)

}
export default CurrencyConverter;