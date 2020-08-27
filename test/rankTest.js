const rankTest = require('ava');
const { voyageRisk } = require('../src/rank')
const { captainHistoryRisk } = require('../src/rank')
const { voyageProfitFactor } = require('../src/rank')
    // rankTest('foo', t => {
    //   t.pass();
    // });

// rankTest('bar', async t => {
//   const bar = Promise.resolve('bar');
//   t.is(await bar, 'bar');
// });

const voyageHasChina = {
    zone: 'china',
    length:  10,
};

const historyLengtOverFive = [{
    zone: 'east-indies',
    profit: 5,
}, {
    zone: 'west-indies',
    profit: 15,
}, {
    zone: 'china',
    profit: -2,
}, {
    zone: 'china',
    profit: -2,
}, {
    zone: 'china',
    profit: -2,
}, {
    zone: 'west-africa',
    profit: 7,
}, ];

const historyLengthLessFive = [{
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

const historyWithoutChina = [{
        zone: 'east-indies',
        profit: 5,
    },
    {
        zone: 'west-indies',
        profit: 15,
    },
    {
        zone: 'east-indies',
        profit: 2,
    },
    {
        zone: 'west-africa',
        profit: 7,
    },
    {
        zone: 'west-indies',
        profit: 15,
    },
    {
        zone: 'west-africa',
        profit: 7,
    }
];

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
    //when
    const result = voyageRisk(voyageHasChina)
        //then
    t.is(result, 9)
})

rankTest('should return 4 when captainHistoryRisk given voyage zone is china and history length < 5', t => {
    //when
    const result = captainHistoryRisk(voyageHasChina, historyLengthLessFive)
        //then
    t.is(result, 4)
})

rankTest('should return 2 when captainHistoryRisk given voyage zone is china and history length > 5', t => {
    //when
    const result = captainHistoryRisk(voyageHasChina, historyLengtOverFive)
        //then
    t.is(result, 2)
})

rankTest('should return 4 when captainHistoryRisk given voyage zone not china and history length > 5', t => {
    //given
    const voyage = {
        zone: 'east-indies',
        length:  10,
    };
    //when
    const result = captainHistoryRisk(voyage, historyLengtOverFive)
        //then
    t.is(result, 4)
})

rankTest('should return 6 when captainHistoryRisk given voyage zone not china and history length < 5', t => {
    //given
    const voyage = {
        zone: 'east-indies',
        length:  10,
    };
    //when
    const result = captainHistoryRisk(voyage, historyLengthLessFive)
        //then
    t.is(result, 6)
})

rankTest('should return 6 when voyageProfitFactor given voyage zone is china and history length < 10 and hasChina', t => {
    //when
    const result = voyageProfitFactor(voyageHasChina, historyLengtOverFive)
        //then
    t.is(result, 6)
})

rankTest('should return 7 when voyageProfitFactor given voyage zone is china voyage length > 12 but < 18 hasChina history length < 10', t => {
    //given
    const voyage = {
        zone: 'china',
        length: 13,
    };
    //when
    const result = voyageProfitFactor(voyage, historyLengtOverFive)
        //then
    t.is(result, 7)
})

rankTest('should return 6 when voyageProfitFactor given voyage zone is china voyage length >18 hasChina history length < 10', t => {
    //given
    const voyage = {
        zone: 'china',
        length: 20,
    };
    //when
    const result = voyageProfitFactor(voyage, historyLengtOverFive)
        //then
    t.is(result, 6)
})

rankTest('should return 2 when voyageProfitFactor given voyage zone is china voyage length >14 noChina history length < 8', t => {
    //given
    const voyage = {
        zone: 'china',
        length: 20,
    };
    //when
    const result = voyageProfitFactor(voyage, historyWithoutChina)
        //then
    t.is(result, 2)
})

rankTest('should return 4 when voyageProfitFactor given voyage zone is china voyage length =14 noChina history length > 8', t => {
    const voyage = {
        zone: 'china',
        length: 14,
    };
    const history = [{
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'east-indies',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 4);
})

rankTest('should return 4 when voyageProfitFactor given voyage zone is east-indies voyage length =14 noChina history length > 8', t => {
    const voyage = {
        zone: 'east-indies',
        length: 14,
    };
    const history = [{
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'east-indies',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 4);
})

rankTest('should return 3 when voyageProfitFactor given voyage zone is west-indies voyage length =14 noChina history length > 8', t => {
    const voyage = {
        zone: 'west-indies',
        length: 14,
    };
    const history = [{
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'east-indies',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 3);
})