import React, { useState, useEffect } from "react";

const CompanyComponent = ({ company }) => {
  const [stockData, setStockData] = useState({
    price: 0,
    bid: 0,
    ask: 0,
    volume: 0,
    open: 0,
    high: 0,
    low: 0,
    previous: 0,
    idss: 0,
    idssvolume: 0,
    idssvalue: 0.0
  });

  //hardcode first, backend only API
  useEffect(() => {
    const fetchData = async () => {
        try {
          switch (company) {
            case 'company1':
              setStockData({
                price: 1.1111,
                bid: 1.530,
                ask: 1.540,
                volume: 8418,
                open: 1.540,
                high: 1.550,
                low: 1.530,
                previous: 1.540,
                idss: 'Yes',
                idssvolume: 0,
                idssvalue: 0.0
              });
              break;
            case 'company2':
              setStockData({
                price: 2.2222,
                bid: 2.530,
                ask: 2.540,
                volume: 9420,
                open: 2.540,
                high: 2.550,
                low: 2.530,
                previous: 2.540,
                idss: 'No',
                idssvolume: 0,
                idssvalue: 0.0
              });
              break;
            case 'company3':
              setStockData({
                price: 3.3333,
                bid: 2.530,
                ask: 2.540,
                volume: 9420,
                open: 2.540,
                high: 2.550,
                low: 2.530,
                previous: 2.540,
                idss: 'No',
                idssvolume: 0,
                idssvalue: 0.0
              });
              break;
            case 'company4':
              setStockData({
                price: 4.4444,
                bid: 2.530,
                ask: 2.540,
                volume: 9420,
                open: 2.540,
                high: 2.550,
                low: 2.530,
                previous: 2.540,
                idss: 'No',
                idssvolume: 0,
                idssvalue: 0.0
              });
              break;
              case 'company5':
              setStockData({
                price: 5.5555,
                bid: 2.530,
                ask: 2.540,
                volume: 9420,
                open: 2.540,
                high: 2.550,
                low: 2.530,
                previous: 2.540,
                idss: 'No',
                idssvolume: 0,
                idssvalue: 0.0
              });
              break;
            default:
              // Handle default case or show error message
              console.error('Company not found or data not available');
              break;
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [company]);
  
  return (
    <div>
        <div>
            <div id="stock-price">
                <h4>{stockData.price} MYR = 0.000 (0.000%)</h4>
            </div>
            <div>
                <table id="stock-table">
                    <thead className="stock-table-header">
                        <tr>
                            <th>Bid (Volume)</th>
                            <th>Ask (Volume)</th>
                        </tr>
                    </thead>
                    <tbody className="stock-table-body">
                        <tr>
                            <td>{stockData.bid}</td>
                            <td>{stockData.ask}</td>
                        </tr>
                    </tbody>
                    <thead className="stock-table-header">
                        <tr>
                            <th>Volume</th>
                            <th>Open</th>
                        </tr>
                    </thead>
                    <tbody className="stock-table-body">
                        <tr>
                            <td>{stockData.volume}</td>
                            <td>{stockData.open}</td>
                        </tr>
                    </tbody>
                    <thead className="stock-table-header">
                        <tr>
                            <th>High</th>
                            <th>Low</th>
                        </tr>
                    </thead>
                    <tbody className="stock-table-body">
                        <tr>
                            <td>{stockData.high}</td>
                            <td>{stockData.low}</td>
                        </tr>
                    </tbody>
                    <thead className="stock-table-header">
                        <tr>
                            <th>Previous Close</th>
                            <th>IDSS</th>
                        </tr>
                    </thead>
                    <tbody className="stock-table-body">
                        <tr>
                            <td>{stockData.previous}</td>
                            <td>{stockData.idss}</td>
                        </tr>
                    </tbody>
                    <thead className="stock-table-header">
                        <tr>
                            <th>IDSS (Volume)</th>
                            <th>IDSS (Value)</th>
                        </tr>
                    </thead>
                    <tbody className="stock-table-body">
                        <tr>
                            <td>{stockData.idssvolume}</td>
                            <td>{stockData.idssvalue}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default CompanyComponent;
