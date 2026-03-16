import React from "react";

import Navbar from "../components/navbar.jsx"
import Sidebar from "../components/sidebar.jsx"

import calendar_icon from "../assets/calendar-icon.svg"; // Giả định tên file
import search_icon from "../assets/search-icon.svg";     // Đã có trong Navbar
import eye_icon from "../assets/eye-view-icon.svg";           // Icon xem
import edit_icon from "../assets/edit-icon.svg";         // Icon sửa

import "../style/importReport.css";

const importReport = () => {
    const data = [
        { id: "NV1306111", user: "Nguyễn Văn A", supplier: "CONG TY TNHH THANH DAT", date: "15/02/2026 8h51", total: "15.190.556 vnd", status: "COMPLETE" },
        { id: "NV1306110", user: "Nguyễn Văn A", supplier: "CONG TY THUC PHAM HOANG HUY", date: "15/02/2026 8h32", total: "22.846.115 vnd", status: "COMPLETE" },
        { id: "NV1306109", user: "Phạm Văn B", supplier: "CONG TY TNHH A&B", date: "15/02/2026 7h01", total: "99.047.383 vnd", status: "COMPLETE" },
        { id: "NV1306108", user: "Nguyễn Tuấn C", supplier: "CONG TY TNHH THUC PHAM BB", date: "14/02/2026 22h05", total: "74.829.493 vnd", status: "COMPLETE" },
        { id: "NV1306107", user: "Lê Hương L", supplier: "CONG TY TNHH THUC PHAM AC", date: "14/02/2026 21h38", total: "1.473.838.499 vnd", status: "COMPLETE" },
        { id: "NV1306106", user: "Phạm Thị Huyền...", supplier: "CONG TY TNHH DUOC PHAM HG", date: "14/02/2026 20h12", total: "15.940.349 vnd", status: "COMPLETE" },
        { id: "NV1306105", user: "Phạm Văn B", supplier: "CONG TY TNHH BESICO", date: "14/02/2026 19h46", total: "35.489.090 vnd", status: "COMPLETE" },
        { id: "NV1306104", user: "Nguyễn Văn A", supplier: "CONG TY TNHH A&B", date: "14/02/2026 18h01", total: "57.485.749 vnd", status: "COMPLETE" },
        { id: "NV1306104", user: "Nguyễn Văn A", supplier: "CONG TY TNHH A&B", date: "14/02/2026 18h01", total: "57.485.749 vnd", status: "COMPLETE" },
        { id: "NV1306104", user: "Nguyễn Văn A", supplier: "CONG TY TNHH A&B", date: "14/02/2026 18h01", total: "57.485.749 vnd", status: "COMPLETE" },
        { id: "NV1306104", user: "Nguyễn Văn A", supplier: "CONG TY TNHH A&B", date: "14/02/2026 18h01", total: "57.485.749 vnd", status: "COMPLETE" },
        { id: "NV1306104", user: "Nguyễn Văn A", supplier: "CONG TY TNHH A&B", date: "14/02/2026 18h01", total: "57.485.749 vnd", status: "COMPLETE" },
        { id: "NV1306104", user: "Nguyễn Văn A", supplier: "CONG TY TNHH A&B", date: "14/02/2026 18h01", total: "57.485.749 vnd", status: "COMPLETE" },
        { id: "NV1306104", user: "Nguyễn Văn A", supplier: "CONG TY TNHH A&B", date: "14/02/2026 18h01", total: "57.485.749 vnd", status: "COMPLETE" },
        { id: "NV1306104", user: "Nguyễn Văn A", supplier: "CONG TY TNHH A&B", date: "14/02/2026 18h01", total: "57.485.749 vnd", status: "COMPLETE" },
        { id: "NV1306104", user: "Nguyễn Văn A", supplier: "CONG TY TNHH A&B", date: "14/02/2026 18h01", total: "57.485.749 vnd", status: "COMPLETE" },
        { id: "NV1306104", user: "Nguyễn Văn A", supplier: "CONG TY TNHH A&B", date: "14/02/2026 18h01", total: "57.485.749 vnd", status: "COMPLETE" },
        { id: "NV1306104", user: "Nguyễn Văn A", supplier: "CONG TY TNHH A&B", date: "14/02/2026 18h01", total: "57.485.749 vnd", status: "COMPLETE" },
        { id: "NV1306104", user: "Nguyễn Văn A", supplier: "CONG TY TNHH A&B", date: "14/02/2026 18h01", total: "57.485.749 vnd", status: "COMPLETE" },
        { id: "NV1306104", user: "Nguyễn Văn A", supplier: "CONG TY TNHH A&B", date: "14/02/2026 18h01", total: "57.485.749 vnd", status: "COMPLETE" },
        { id: "NV1306104", user: "Nguyễn Văn A", supplier: "CONG TY TNHH A&B", date: "14/02/2026 18h01", total: "57.485.749 vnd", status: "COMPLETE" },
    ];

    return (
        <div className="container" style={{ display: 'flex' }}>
            <Sidebar />

            <section id="content-section">
                <Navbar />
                
                <main className="main-content">
                    {/* Toolbar: Bộ lọc và Tìm kiếm */}
                    <div className="toolbar">
                        <div className="date-group">
                            <div className="input-with-icon">
                                <input type="text" placeholder="Từ ngày" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} />
                                <img src={calendar_icon} alt="calendar" className="inner-icon" />
                            </div>
                            <div className="input-with-icon">
                                <input type="text" placeholder="Đến ngày" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} />
                                <img src={calendar_icon} alt="calendar" className="inner-icon" />
                            </div>
                        </div>

                        <div className="search-group">
                            <div className="input-with-icon search-input-wrapper">
                                <input type="text" placeholder="Tìm kiếm" />
                                <img src={search_icon} alt="search" className="inner-icon" />
                            </div>
                            <button className="btn-find">Tìm kiếm</button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="table-wrapper">
                        <table className="report-table">
                            <thead>
                                <tr>
                                    <th>Mã phiếu</th>
                                    <th>Người nhập hàng</th>
                                    <th>Nhà cung cấp</th>
                                    <th>Ngày lập phiếu</th>
                                    <th>Tổng tiền</th>
                                    <th>Trạng thái</th>
                                    <th className="col-actions"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.user}</td>
                                        <td>{item.supplier}</td>
                                        <td>{item.date}</td>
                                        <td>{item.total}</td>
                                        <td className="status-cell">{item.status}</td>
                                        <td className="action-btns">
                                            <button className="icon-btn"><img src={eye_icon} alt="View" /></button>
                                            <button className="icon-btn"><img src={edit_icon} alt="Edit" /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="pagination">
                        <span>1 &gt; 2 &gt; 3 &gt; ...</span>
                    </div>
                </main>
            </section>
        </div>
    );
};

export default importReport;