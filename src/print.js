function printOwing(invoice) {
    let outstanding = calculateOutstanding(invoice);
    // console.log('***********************');
    // console.log('**** Customer Owes ****');
    // console.log('***********************');




    // record due date
    const today = new Date();
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    // print details
    let result = getTxtResult(invoice, outstanding);
    // console.log(`name: ${invoice.customer}`);
    // console.log(`amount: ${outstanding}`);
    // console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
    return result
}

module.exports = {
    printOwing
}

function calculateOutstanding(invoice) {
    let outstanding = 0;
    for (const o of invoice.borderSpacing) {
        outstanding += o.amount;
    }
    return outstanding;
}

function getTxtResult(invoice, outstanding) {
    let result = `***********************\n` +
        `**** Customer Owes ****\n` +
        `***********************\n`;
    result += `name: ${invoice.customer}\n`;
    result += `amount: ${outstanding}\n`;
    result += `amount: ${invoice.dueDate.toLocaleDateString()}\n`;
    return result;
}