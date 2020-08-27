function printOwing(invoice) {
    let outstanding = calculateOutstanding(invoice);
    recordDueDate(invoice);
    // print details
    let result = getTxtResult(invoice, outstanding);
    return result
}

module.exports = {
    printOwing
}

function recordDueDate(invoice) {
    const today = new Date();
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
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