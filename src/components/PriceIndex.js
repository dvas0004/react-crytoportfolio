import React from 'react';

const PriceIndex = ({ priceIndex, priceDifference }) => {

  if (priceIndex > 0) {
    var priceIndexSpan = <span className="success">
      ( + €{priceDifference.toFixed(2)} / +{priceIndex.toFixed(4)}% )
    </span>
  } else {
    var priceIndexSpan = <span className="fail">
      ( €{priceDifference.toFixed(2)} / {priceIndex.toFixed(4)}% )
    </span>
  }

  return priceIndexSpan;
}


export default PriceIndex
