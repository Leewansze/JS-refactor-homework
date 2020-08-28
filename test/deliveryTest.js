const deliveryTest = require('ava');
const {deliveryDate} = require("../src/delivery")

deliveryTest('should return date for delay 2 days when deliveryDate given abOrder and isrush is true', t => {
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