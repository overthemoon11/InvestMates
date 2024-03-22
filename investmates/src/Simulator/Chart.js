import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const StockChartComponent = ({ timeInterval }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null); // Reference to the Chart instance

    useEffect(() => {
        const fetchData = async () => {
            if (chartInstance.current) {
                // If the chart instance exists, destroy it before creating a new chart
                chartInstance.current.destroy();
            }

            // Fetch data based on the selected time interval (timeInterval)
            // Replace the dummy data below with your actual data fetching logic
            let labels = [];
            let data = [];

            switch (timeInterval) {
                case '1MIN':
                    labels = ['Min 1', 'Min 2', 'Min 3', 'Min 4', 'Min 5'];
                    data = [100, 110, 105, 115, 120]; // Example data, replace with actual data
                    break;
                case '5MIN':
                    labels = ['Min 5', 'Min 10', 'Min 15', 'Min 20', 'Min 25'];
                    data = [150, 140, 135, 130, 125]; // Example data, replace with actual data
                    break;
                case '10MIN':
                    labels = ['Min 10', 'Min 20', 'Min 30', 'Min 40', 'Min 50'];
                    data = [180, 170, 165, 160, 155]; // Example data, replace with actual data
                    break;
                case '30MIN':
                    labels = ['Min 30', 'Min 60', 'Min 90', 'Min 120', 'Min 150'];
                    data = [200, 190, 185, 180, 175]; // Example data, replace with actual data
                    break;
                case '1H':
                    labels = ['Hour 1', 'Hour 2', 'Hour 3', 'Hour 4', 'Hour 5'];
                    data = [220, 230, 225, 235, 240]; // Example data, replace with actual data
                    break;
                case '1D':
                    labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
                    data = [100, 110, 105, 115, 120]; // Example data, replace with actual data
                    break;
                case '1M':
                    labels = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5'];
                    data = [250, 260, 255, 265, 270]; // Example data, replace with actual data
                    break;
                default:
                    labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
                    data = [100, 110, 105, 115, 120]; // Example data, replace with actual data
                    break;
            }

            // Create a new chart
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Stock Price',
                        data: data,
                        borderColor: 'blue',
                        backgroundColor: 'rgba(0, 0, 255, 0.2)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
        };

        fetchData();
    }, [timeInterval]);

    return (
        <div>
            <canvas ref={chartRef} width="400" height="200"></canvas>
        </div>
    );
};

export default StockChartComponent;
