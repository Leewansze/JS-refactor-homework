function isDeliveryState(deliveryState, anOrder) {
  return deliveryState.includes(anOrder.deliveryState);
}

function deliveryWithTrueRush(anOrder) {
  let deliveryTime;
  const deliveryState_MACT = [ 'MA', 'CT', ];
  const deliveryState_NYNH = [ 'NY', 'NH', ];

  if (isDeliveryState(deliveryState_MACT, anOrder)){
    deliveryTime = 1;
  } else if (isDeliveryState(deliveryState_NYNH, anOrder)) {
    deliveryTime = 2;
  } else {
    deliveryTime = 3;
  }
  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function deliveryWithFalseRush(anOrder) {
  let deliveryTime;
  const deliveryState_CTNY = [ 'CT', 'NY', ];
  const deliveryState_MENH = [ 'ME', 'NH', ];

  if (isDeliveryState(deliveryState_CTNY, anOrder)) {
    deliveryTime = 2;
  } else if (isDeliveryState(deliveryState_MENH, anOrder)) {
    deliveryTime = 3;
  } else {
    deliveryTime = 4;
  }
  return anOrder.placedOn.plusDays(2 + deliveryTime);
}

function deliveryDate(anOrder, isRush) {
  return isRush ? deliveryWithTrueRush(anOrder) : deliveryWithFalseRush(anOrder);
}

module.exports = {
  deliveryDate
};