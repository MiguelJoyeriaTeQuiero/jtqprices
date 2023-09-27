import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Prices = () => {
  const [prices, setPrices] = useState({})
  
  useEffect(() => {
    const getPrices = async () => {
      const response = await axios.get('https://api.metalpriceapi.com/v1/latest?api_key=1aff6cbf07575ceb17737a30db95f497&base=EUR&currencies=XAU,XAG')
      setPrices(response.data.rates)
    }
    getPrices()
  },[])

  return (
      <div className='content'>            
      <div className='price-container'>
        <h1>PRECIOS OCASIÓN</h1> 
        <p>ORO: {(prices.XAU * 100000 * 0.999 * 0.750).toFixed(2)} €</p>
          <p>PLATA {(prices.XAG * 10).toFixed(2)} €</p>  
      </div>
    </div>

)
}

export default Prices