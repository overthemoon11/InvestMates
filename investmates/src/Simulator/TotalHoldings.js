import React from 'react';

const TotalHolding = () => {
  return (
    <div className="total-holding-container">
      <table className="total-holding-table">
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Quantity</th>
            <th>Bought Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TREE</td>
            <td>800</td>
            <td>1232</td>
          </tr>
          {/* Add more rows for additional holdings if needed */}
        </tbody>
      </table>
    </div>
  );
};

export default TotalHolding;
