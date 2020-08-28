function deliveryWithTrueRush(anOrder) {
  let deliveryTime;
  if ([
    'MA',
    'CT',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 1;
  } else if ([
    'NY',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  } else {
    deliveryTime = 3;
  }
  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function deliveryWithFalseRush(anOrder) {
  let deliveryTime;
  if ([
    'CT',
    'NY',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  } else if ([
    'ME',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 3;
  } else {
    deliveryTime = 4;
  }
  return anOrder.placedOn.plusDays(2 + deliveryTime);
}

function deliveryDate(anOrder, isRush) {
    return isRush ? deliveryWithTrueRush(anOrder): deliveryWithFalseRush(anOrder);
}

module.exports = {
    deliveryDate
};