import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import db from './database/crypto_db';
import callApi from './services/api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchBTCprice(action) {
   try {
      const price = yield call(callApi, 'BTC-EUR/sell');

      let price_history = yield db.value_history.where("currency").equals('BTC').toArray();
      let price_history_array = [];

      price_history.map( p => {
          price_history_array.push(p.value);
      })

      price_history_array.push(price.response.data.amount);
      db.value_history.put({date: Date.now(), currency: 'BTC', value: price.response.data.amount})

      yield put({type: "BTC_FETCH_SUCCEEDED", price: price, price_history: price_history_array});
   } catch (e) {
      yield put({type: "BTC_FETCH_FAILED", message: e.message});
   }
}

function* fetchETHprice(action) {
   try {
      const price = yield call(callApi, 'ETH-EUR/sell');

      let price_history = yield db.value_history.where("currency").equals('ETH').toArray();
      let price_history_array = [];

      price_history.map( p => {
          price_history_array.push(p.value);
      })

      price_history_array.push(price.response.data.amount);
      db.value_history.put({date: Date.now(), currency: 'ETH', value: price.response.data.amount})

      yield put({type: "ETH_FETCH_SUCCEEDED", price: price, price_history: price_history_array});
   } catch (e) {
      yield put({type: "ETH_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/

/*
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}
*/

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* BTCSaga() {
  yield takeLatest("BTC_FETCH_REQUESTED", fetchBTCprice);
}

function* ETHSaga() {
  yield takeLatest("ETH_FETCH_REQUESTED", fetchETHprice);
}

export { ETHSaga, BTCSaga }
