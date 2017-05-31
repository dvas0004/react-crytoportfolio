import React, { Component } from 'react';
import {connect} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import VisiblePriceList from '../components/VisiblePriceList';

const getBTCPrice = {
	type: "BTC_FETCH_REQUESTED"
}

const getETHPrice = {
	type: "ETH_FETCH_REQUESTED"
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {dispatch} = this.props;
    dispatch(getBTCPrice);
    dispatch(getETHPrice);
  }


  render() {
    return (
		<div>
		 	<VisiblePriceList />
		</div>
    );
  }
}


export default connect()(App)
