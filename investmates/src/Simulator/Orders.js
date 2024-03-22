import React from 'react';

const Order = () => {
  // Hardcoded transaction data for demonstration
  const hardcodedTransactions = [
    {
      date: '2022-03-25',
      type: 'BUY',
      stockName: 'TREE',
      quantity: 800,
      pricePerStock: 1.54,
      totalAmount: 1232,
    },
    // Add more hardcoded transactions as needed
  ];

  return (
    <div className="order-container">
      <h3 className="order-date">{hardcodedTransactions[0].date}</h3> {/* Displaying the date above the table */}
      <table className="order-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Stock Name</th>
            <th>Quantity</th>
            <th>Price Per Stock</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {hardcodedTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.type}</td>
              <td>{transaction.stockName}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.pricePerStock}</td>
              <td>{transaction.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
