import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AllPrices = () => {
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
        <h1>PRECIOS DEL DÍA</h1> 
          <p>ORO: {(prices.XAG * 1000).toFixed(2)} €</p>
          <p>PLATA: {(prices.XAU * 1000).toFixed(2)} €</p>  
        </div>
    </div>

)
}

export default AllPrices