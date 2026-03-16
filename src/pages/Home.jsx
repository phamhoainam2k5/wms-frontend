import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import StatCard from "../components/statcard"
import DashboardChart from "../components/DashboardChart"
import BestSellerTable from "../components/bestSellerTable"

import "../style/global.css";
import "../style/DashboardPage.css"

function Home() {
    // Dữ liệu mẫu cho bảng sản phẩm bán chạy (Hình 2)
    const tableData = [
        { id: '156161', name: 'GẠO ST25 NEPTUNE 10KG', category: 'THỰC PHẨM KHO' },
        { id: '256262', name: 'NGK COCA COLA 1.5L*6', category: 'RƯỢU BIA' },
        { id: '156123', name: 'BÁNH AN 255G', category: 'BÁNH KẸO' },
        { id: '594112', name: 'BÁNH DANISA 350G', category: 'BÁNH KẸO' },
        { id: '119822', name: 'DẦU ĂN NEPTUNE 5KG', category: 'THỰC PHẨM KHÔ' },
        { id: '262323', name: 'ÁO KHOÁC GIÓ', category: 'THỜI TRANG' },
        { id: '121515', name: 'ÁO DÀI TẾT', category: 'THỜI TRANG' },
        { id: '100001', name: 'SỮA TƯƠI VINAMILK', category: 'GIẢI KHÁT' },
        { id: '100002', name: 'MÌ HẢO HẢO TÔM CHUA CAY', category: 'THỰC PHẨM KHÔ' },
        { id: '100003', name: 'NƯỚC RỬA CHÉN SUNLIGHT SIÊU SẠCH 500ML + BỌT BIỂN RỬA BÁT*1', category: 'HÓA MỸ PHẨM' },
        { id: '100003', name: 'NƯỚC RỬA CHÉN SUNLIGHT SIÊU SẠCH 500ML + BỌT BIỂN RỬA BÁT*1', category: 'HÓA MỸ PHẨM' },
    ];

    return (
        <div className="home-layout">
            <Sidebar />
            
            <section id="content">
                <Navbar />
                
                {/* Phần ruột của Dashboard */}
                <main className="dashboard-main-content">
                    <h2 className="welcome-title">CHÀO MỪNG BẠN, 605010779</h2>

                    {/* 4 Thẻ thống kê */}
                    <div className="stats-row">
                        <StatCard title="Nhập vào trong tháng" value="550.456.4512 VND" />
                        <StatCard title="Xuất ra trong tháng" value="320.456.512 VND" />
                        <StatCard title="Doanh số tháng" value="305.115.622 VND" />
                        <StatCard title="Số lượng nhà cung cấp" value="40" isCenter={true} />
                    </div>

                    {/* Biểu đồ và Bảng hàng ngang */}
                    <div className="dashboard-grid">
                        <div className="chart-section-wrapper">
                            <h3 className="chart-title">TỔNG QUAN NHẬP/XUẤT THEO THÁNG</h3>
                            <DashboardChart />
                        </div>
                        
                        <BestSellerTable data={tableData} />
                    </div>
                </main>
            </section>
        </div>
    );
}

export default Home;