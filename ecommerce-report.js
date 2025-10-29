 const transactions = [
  { id: 'tr_1', customerId: 'c_1', items: [{ productId: 'p_1', price: 50, quantity: 2 }, { productId: 'p_2', price: 25, quantity: 1 }], status: 'completed' },
  { id: 'tr_2', customerId: 'c_2', items: [{ productId: 'p_3', price: 120, quantity: 1 }], status: 'completed' },
  { id: 'tr_3', customerId: 'c_1', items: [{ productId: 'p_2', price: 25, quantity: 3 }], status: 'pending' },
  { id: 'tr_4', customerId: 'c_3', items: [{ productId: 'p_4', price: 80, quantity: 1 }], status: 'completed' },
  { id: 'tr_5', customerId: 'c_1', items: [{ productId: 'p_1', price: 50, quantity: 1 }], status: 'completed' },
];

const statusOfCompleted = transactions
.filter(trnx => trnx.status === "completed")
.reduce((sum, totalTrnx)=> {
    const transactionTotalCost = totalTrnx.items.reduce((total, item) =>
    {
        return total + (item.price * item.quantity);
    },0)
   sum.totalRevenue += transactionTotalCost
   return sum

}, {totalRevenue: 0, customers: {}})

console.log(statusOfCompleted)