import React, {useState, useEffect} from 'react'
import axios from 'axios'

const SecondPrices = () => {
  const [prices, setPrices] = useState({})
  
  useEffect(() => {
    const getPrices = async () => {
      const response = await axios.get('https://api.metalpriceapi.com/v1/latest?api_key=1aff6cbf07575ceb17737a30db95f497&base=EUR&currencies=XAU,XAG')
      setPrices(response.data.rates)
    }
    getPrices()
  },[])

  return (
      <div className='second-content'>            
      <div className='second-price-container'>
              <h1>PRECIOS OCASIÓN</h1>  
              <p>Compra: {prices.XAG} €</p>
        </div>
    </div>
)
}

export default SecondPrices