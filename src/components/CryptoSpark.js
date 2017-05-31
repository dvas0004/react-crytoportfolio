import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';


let currency_history = [];

class CryptoSpark extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("CryptoSpark: ", this.props.history);

    return (
      <Sparklines data={this.props.history[this.props.code]}>
        <SparklinesLine color="blue" />
      </Sparklines>
    );
  }
}

const mapStateToProps = (state) => ({
  history: state.history
})

const mapDispatchToProps = {
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoSpark)
