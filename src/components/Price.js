import React from 'react'
import {Card, CardTitle, CardText} from 'react-mdl'
import CryptoSpark from './CryptoSpark'
import PriceIndex from './PriceIndex'

import BTCLogo from '../images/btc.png'
import ETHLogo from '../images/eth.png'

import {
  TOTAL_EUR_WORTH, TOTAL_BTC_WORTH, TOTAL_ETH_WORTH,
  TOTAL_BTC_EUR, TOTAL_ETH_EUR
} from "../constants"

const images = {
  BTC : BTCLogo,
  ETH : ETHLogo
}

const denomination = {
  BTC: "cc BTC",
  ETH: "cc ETH"
}

const cryptoValue = {
  BTC: TOTAL_BTC_WORTH,
  ETH: TOTAL_ETH_WORTH
}

const cryptoValueEur = {
  BTC: TOTAL_BTC_EUR,
  ETH: TOTAL_ETH_EUR
}

const Price = ({ code, value }) => {

  const priceIndex = (value/cryptoValueEur[code])-1;
  const priceDifference = (value-cryptoValueEur[code]);


  return (
    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
        <CardTitle expand style={{color: '#fff', background: 'url('+images[code]+') bottom right 15% no-repeat #46B6AC'}}>{code}</CardTitle>
        <CardText>
             <span> €{value.toFixed(2)} / <i className={denomination[code]} aria-hidden="true"></i> {cryptoValue[code]}</span>
             <br />
             <PriceIndex priceIndex = {priceIndex} priceDifference={priceDifference} />
            <hr />
            <CryptoSpark code={code} />
        </CardText>
    </Card>
  )
}

export default Price
