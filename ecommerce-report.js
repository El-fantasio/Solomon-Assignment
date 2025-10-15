const statusOfCompleted = transactions
.filter(trnx => trnx.status === "completed")
.reduce((sum, totalTrnx)=> {
    const transactionTotalCost = transaction.items.reduce((total, item) =>
    {
        return total + (item.price * item.quantity);
    },0)
}, {totalRevenue: 0, customers: {}})