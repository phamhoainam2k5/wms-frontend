import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
            {
                label: 'NHẬP VÀO',
                data: [3800, 3200, 2200],
                backgroundColor: '#3C91E6', // var(--blue)
            },
            {
                label: 'XUẤT RA',
                data: [2500, 1800, 1100],
                backgroundColor: '#af94f7',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Quan trọng nhất: Cho phép biểu đồ giãn theo chiều cao container
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: { size: 13, weight: '600', family: 'Poppins' },
                    usePointStyle: true, // Biến các ô vuông màu thành hình tròn cho hiện đại
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 10,
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: '#f0f0f0', drawBorder: false }, // Làm mờ đường kẻ ngang
                ticks: { font: { family: 'Poppins' } }
            },
            x: {
                grid: { display: false }, // Ẩn đường kẻ dọc để nhìn thoáng hơn
                ticks: { font: { family: 'Poppins' } }
            }
        }
    };

    return (
        <div style={{ height: '100%', minHeight: '400px' }}> 
            <Bar data={data} options={options} />
        </div>
    );
};

export default DashboardChart;