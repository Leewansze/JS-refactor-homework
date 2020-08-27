const printTest = require('ava');
const { printOwing } = require("../src/print")

printTest('should return txt when printOwing given invoice', t => {
    //given
    const invoice = {
        borderSpacing: [
            { amount: 15 },
            { amount: 20 }
        ],
        customer: 'Alice'
    };
    let today = new Date();
    let future = new Date();
    future.setDate(today.getDate() + 30);
    //when
    const result = printOwing(invoice);
    //then
    t.is(result, `***********************\n` +
        `**** Customer Owes ****\n` +
        `***********************\n` +
        `name: Alice\n` +
        `amount: 35\n` +
        `amount: ${future.toLocaleDateString()}\n`)
});