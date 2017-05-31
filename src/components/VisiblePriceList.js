import React from 'react'
import Price from './Price'
import {connect} from 'react-redux'
import {Card, CardTitle, CardText, Cell, Grid} from 'react-mdl'
import EURlogo from '../images/EURLogo.png'
import PriceIndex from './PriceIndex'
import {TOTAL_EUR_WORTH} from '../constants'

const PriceList = ({ prices }) => {
  let total = 0;
  let priceIndex = 0;
  let priceDifference = 0;

  prices.map( price => {
    total += price.value;
    priceIndex = (total/TOTAL_EUR_WORTH)-1;
    priceDifference = (total - TOTAL_EUR_WORTH);
  } )

  return (
  <div>
    <Grid>
      <Cell col={4}>
        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
            <CardTitle expand style={{color: '#fff', background: 'url('+EURlogo+') bottom right 15% no-repeat #46B6AC'}}>TOTAL</CardTitle>
            <CardText>
                <strong>€ {total.toFixed(2)}</strong>
                <br />
                <PriceIndex priceIndex={priceIndex} priceDifference={priceDifference} />
            </CardText>
        </Card>
      </Cell>
      { prices.map( price =>
        <Cell col={4}>
          <Price
            key={price.id}
            {...price}
          />
        </Cell>
      )}
    </Grid>
  </div>
)}

const mapStateToProps = (state) => ({
  prices: state.prices
})

const mapDispatchToProps = {
  //onTodoClick: toggleTodo
}

const VisiblePriceList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceList)

export default VisiblePriceList
