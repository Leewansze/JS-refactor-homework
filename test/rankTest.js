const rankTest = require('ava');
const { voyageRisk } = require('../src/rank')
    // rankTest('foo', t => {
    //   t.pass();
    // });

// rankTest('bar', async t => {
//   const bar = Promise.resolve('bar');
//   t.is(await bar, 'bar');
// });

rankTest('should return 7 when voyageRisk given voyage length > 8', t => {
    //given
    const voyage = {
        zone: 'west-indies',
        length: 12,
    };
    //when
    const result = voyageRisk(voyage)
        //then
    t.is(result, 7)
})