import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2';

const HandleBuyClick = (activeButton) => {
    Swal.fire({
      title: 'Buy Stocks',
      html: `
        <label for="quantity">Quantity:</label><br>
        <input type="number" id="quantity" name="quantity" required><br><br>
        <label for="price">Price per Stock:</label><br>
        <input type="number" id="price" name="price" required><br>
      `,
      confirmButtonText: 'Buy',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      focusConfirm: false,
      preConfirm: () => {
        const quantity = Swal.getPopup().querySelector('#quantity').value;
        const price = Swal.getPopup().querySelector('#price').value;
        return { quantity, price };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { quantity, price } = result.value;

        // Calculate total amount
        const totalAmount = quantity * price;

        // Get current date
        const currentDate = new Date().toLocaleDateString();

        // Create the transaction object
        const newTransaction = {
          date: currentDate,
          type: 'BUY',
          stockName: activeButton,
          quantity: quantity,
          pricePerStock: price,
          totalAmount: totalAmount,
        };

    

        Swal.fire('Success', 'Stocks purchased successfully!', 'success');
      }
    });
  };

  export default HandleBuyClick;