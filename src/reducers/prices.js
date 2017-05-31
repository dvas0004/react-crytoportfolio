import {TOTAL_BTC_WORTH, TOTAL_ETH_WORTH} from "../constants"

const prices = (state = [], action) => {
  switch (action.type) {
    case 'BTC_FETCH_SUCCEEDED':
      const priceBTC = action.price.response.data.amount;
      console.log(priceBTC)
      return [
        ...state, {
      		id: 0,
      		code: 'BTC',
      		price: priceBTC,
      		value: priceBTC*(TOTAL_BTC_WORTH)
      	}
      ]
    case 'ETH_FETCH_SUCCEEDED':
      const priceETH = action.price.response.data.amount;
      console.log(priceETH)
      return [
        ...state, {
                id: 1,
                code: 'ETH',
                price: priceETH,
                value: priceETH*(TOTAL_ETH_WORTH)
        }
      ]
    default:
      return state
  }
}

export default prices
