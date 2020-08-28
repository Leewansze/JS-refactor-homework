const deliveryTest = require('ava');
const {deliveryDate} = require("../src/delivery")

deliveryTest('should return date for delay 2 days when deliveryDate given deliveryState has ct and isrush is true', t => {
  //given
  const isRush = true;
  const anOrder = {
    deliveryState: 'CT',
    placedOn: {
      plusDays(delivery) {
        let realDelivery = new Date();
        realDelivery.setDate(realDelivery.getDate() + delivery)
        return realDelivery.toLocaleDateString();
      }
    }
  }
  let delayDay = 2;
  let deliveryDay = new Date();
  deliveryDay.setDate(deliveryDay.getDate() + delayDay)
  //when
  const result = deliveryDate(anOrder, isRush)
  //then
  t.is(result, deliveryDay.toLocaleDateString())
})

deliveryTest('should return date for delay 3 days when deliveryDate given deliveryState has NY and isrush is true', t => {
  //given
  const isRush = true;
  const anOrder = {
    deliveryState: 'NY',
    placedOn: {
      plusDays(delivery) {
        let realDelivery = new Date();
        realDelivery.setDate(realDelivery.getDate() + delivery)
        return realDelivery.toLocaleDateString();
      }
    }
  }
  let delayDay = 3;
  let deliveryDay = new Date();
  deliveryDay.setDate(deliveryDay.getDate() + delayDay)
  //when
  const result = deliveryDate(anOrder, isRush)
  //then
  t.is(result, deliveryDay.toLocaleDateString())
})

deliveryTest('should return date for delay 4 days when deliveryDate given deliveryState unqualified and isrush is true', t => {
  //given
  const isRush = true;
  const anOrder = {
    deliveryState: 'AB',
    placedOn: {
      plusDays(delivery) {
        let realDelivery = new Date();
        realDelivery.setDate(realDelivery.getDate() + delivery)
        return realDelivery.toLocaleDateString();
      }
    }
  }
  let delayDay = 4;
  let deliveryDay = new Date();
  deliveryDay.setDate(deliveryDay.getDate() + delayDay)
  //when
  const result = deliveryDate(anOrder, isRush)
  //then
  t.is(result, deliveryDay.toLocaleDateString())
})