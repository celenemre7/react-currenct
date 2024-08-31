import React, { useState } from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import axios from 'axios'
let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_hjGEOigsTLq84uJ4JHrBUAAoWkBHn39EGcdPHpRR"

function Currency() {

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState();


    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const sonuc = (response.data.data[toCurrency] * amount).toFixed(2); //to fixed noktadn sonra para birimindeki gosterilecek basamak 2
        setResult(sonuc);
    }   

  return (
        <div className='currency-div'>
            <div className='currency-header'>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>
            <div className='input-group'>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className='amount'
                    type="number"
                />
                <select 
                    onChange={(e) => setFromCurrency(e.target.value)}  
                    className='from-currency-option'
                    value={fromCurrency}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                </select>
                <FaRegArrowAltCircleRight className='arrow-icon' />
                <select 
                    onChange={(e) => setToCurrency(e.target.value)} 
                    className='to-currency-option'
                    value={toCurrency}
                >
                    <option value="TRY">TRY</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
                <input 
                    value={result} 
                    readOnly
                    className='result' 
                    type="number"
                />
            </div>
            <button
                onClick={exchange}
                className='exchange-button'
            >
                Çevir
            </button>
        </div>
    )
}

export default Currency