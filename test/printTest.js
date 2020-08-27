const printTest = require('ava');
const { printOwing } = require("../src/print")

printTest('should return when printOwing given ', t => {
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
    const result = printOwing(invoice);
    t.is(result, `***********************\n` +
        `**** Customer Owes ****\n` +
        `***********************\n` +
        `name: Alice\n` +
        `amount: 35\n` +
        `amount: ${future.toLocaleDateString()}\n`)
});