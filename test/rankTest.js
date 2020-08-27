const rankTest = require('ava');
const { voyageRisk } = require('../src/rank')
const { captainHistoryRisk } = require('../src/rank')
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

rankTest('should return 3 when voyageRisk given voyage length > 4 but < 8', t  =>  {
    //given
    const  voyage  =   {
        zone: 'west-indies',
        length: 6,
    };
    //when   
    const  result  = voyageRisk(voyage);
    //then
    t.is(result, 3);
})

rankTest('sholud return 1 when voyageRisk given voyage length < 4',  t  =>  {    
    //given 
    const voyage = {
        zone: 'west-indies',
        length:  2,
    };    
    //when
    const  result  = voyageRisk(voyage);
    //then
    t.is(result, 1)
})

rankTest('should return 5 when voyageRisk given voyage zone is china and voyage length < 4', t => {
    //given
    const voyage = {
        zone: 'china',
        length:  2,
    };
    //when
    const result = voyageRisk(voyage)
        //then
    t.is(result, 5)
})

rankTest('should return 7 when voyageRisk given voyage zone is china and voyage length > 4 but <8', t => {
    //given
    const voyage = {
            zone: 'china',
            length:  6,
        }
        //when
    const result = voyageRisk(voyage);
    //then
    t.is(result, 7)
})

rankTest('should return 9 when voyageRisk given voyage zone is china and voyage length > 8', t => {
    //given
    const voyage = {
        zone: 'china',
        length:  10,
    };
    //when
    const result = voyageRisk(voyage)
        //then
    t.is(result, 9)
})

rankTest('should return 4 when captainHistoryRisk given voyage zone is china and history length < 5', t => {
    //given
    const voyage = {
        zone: 'china',
        length:  10,
    };
    const history = [{
        zone: 'east-indies',
        profit: 5,
    }, {
        zone: 'west-indies',
        profit: 15,
    }, {
        zone: 'china',
        profit: -2,
    }, {
        zone: 'west-africa',
        profit: 7,
    }, ];
    //when
    const result = captainHistoryRisk(voyage, history)
        //then
    t.is(result, 4)
})