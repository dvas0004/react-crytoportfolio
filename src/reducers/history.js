import db from '../database/crypto_db';
import Dexie from 'dexie';

var spawn = Dexie.spawn;
const history = (state = {BTC:[], ETH:[]}, action) => {

  let new_state = Object.assign({},state);
  console.log('history reducer: ',action.price_history);

  switch (action.type) {
    case 'BTC_FETCH_SUCCEEDED':
        new_state.BTC=action.price_history;
        return new_state
    case 'ETH_FETCH_SUCCEEDED':
        new_state.ETH=action.price_history;
        return new_state
    default:
      return state
  }
}

export default history
