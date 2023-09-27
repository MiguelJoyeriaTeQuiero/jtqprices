import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import Prices from './Prices'
import AllPrices from './AllPrices'

const handleDragStart = (e) => e.preventDefault()

const items = [
    <Prices onDragStart={handleDragStart} role="presentation" />,
/*     <AllPrices onDragStart={handleDragStart} role="presentation"/> */
]

const Carrousel = () => {
    return (
        <AliceCarousel
            mouseTracking
            items={items}
            animationDuration={3000}
            disableButtonsControls={true}
            disableDotsControls={true}
            autoPlay={true}
            autoPlayInterval={500}
            infinite={true}
            animationEasingFunction={"ease-in-out"}
        />
    )
}

export default Carrousel