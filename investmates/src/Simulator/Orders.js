import React, { useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    // Function to handle adding an order
    const addOrder = (order) => {
        setOrders([...orders, order]);
    };

    // Function to format the date in the required format
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <div>
            {/* Button to add a sample order */}
            <button
                onClick={() =>
                    addOrder({
                        date: new Date(),
                        companyName: 'Example Company',
                        unitPrice: 100,
                        status: 'Buy',
                        quantity: 10,
                    })
                }
            >
                Add Sample Order
            </button>

            {/* Display orders */}
            <div>
                {orders.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Company Name</th>
                                <th>Unit Price</th>
                                <th>Status</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td>{formatDate(order.date)}</td>
                                    <td>{order.companyName}</td>
                                    <td>{order.unitPrice}</td>
                                    <td>{order.status}</td>
                                    <td>{order.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No records available.</p>
                )}
            </div>
        </div>
    );
};

export default Orders;
