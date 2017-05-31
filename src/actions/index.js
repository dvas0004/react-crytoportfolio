let nextPriceId = 0

export const addPrice = (price) => ({
  type: 'ADD_PRICE',
  id: nextPriceId++,
  price: price
})

