import React, { useContext ,useState} from 'react';
import Swal from 'sweetalert2';

const HandleSellClick = ({ activeButton}) => {

  const handleConfirm = () => {
    const quantity = Swal.getPopup().querySelector('#quantity').value;
    const price = Swal.getPopup().querySelector('#price').value;

    // Calculate total amount
    const totalAmount = quantity * price;

    // Get current date
    const currentDate = new Date().toLocaleDateString();

    // Create the transaction object
    const newTransaction = {
      date: currentDate,
      type: 'SELL',
      stockName: activeButton,
      quantity: quantity,
      pricePerStock: price,
      totalAmount: totalAmount,
    };

    console.log(quantity, price, totalAmount, currentDate);

    Swal.fire('Success', 'Stocks sold successfully!', 'success');
  };

  Swal.fire({
    title: 'Sell Stocks',
    html: `
      <label for="quantity">Quantity:</label><br>
      <input type="number" id="quantity" name="quantity" required><br><br>
      <label for="price">Price per Stock:</label><br>
      <input type="number" id="price" name="price" required><br>
    `,
    confirmButtonText: 'Sell',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    focusConfirm: false,
    preConfirm: handleConfirm,
  });

  return null; // This component doesn't render anything visible
};

export default HandleSellClick;
