import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/sidebar.css"

import box_logo from "../assets/box-icon.svg"

const Sidebar = () => {
    const [active, setActive] = useState("dashboard");

    const menuItems = [
        { key: "Tổng quan", label: "Tổng quan", path: "/tong-quan" },
        { key: "BÁO CÁO NHẬP", label: "Báo cáo nhập hàng", path: "/bao-cao-nhap" },
        { key: "BÁO CÁO XUẤT", label: "Báo cáo xuất hàng", path: "/" },
        { key: "BÁO CÁO TỒN", label: "Báo cáo hàng tồn kho", path: "/" },
        { key: "TẠO PHIẾU NHẬP", label: "Tạo phiếu nhập hàng", path: "/" },
        { key: "TẠO PHIẾU XUẤT", label: "Tạo phiếu xuất hàng", path: "/" },
        { key: "TẠO PHIẾU KIỂM", label: "Tạo phiếu kiểm kê", path: "/" },
        { key: "ĐỔI GIÁ", label: "Đổi giá sản phẩm", path: "/doi-gia" },
        { key: "GIẢM GIÁ", label: "Cài giảm giá", path: "/giam-gia" },
    ];

    return (
        <aside id="sidebar">
            <Link to="/" className="brand">
                <img src={box_logo} alt="WMS" />
                <span class="text">WMS</span>
            </Link>

            <ul className="side-menu top">
                {menuItems.map(item => (
                    <li key={item.key}>
                        <Link to={item.path} onClick={() => setActive(item.key)}>
                            <span className="text">{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>

            <ul className="side-menu bottom">
                <li>
                    <Link to="/settings" onClick={() => setActive("settings")}>
                        <span className="text">Cài đặt</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/logout" className="logout" onClick={() => setActive("logout")}>
                        <span className="text">Đăng xuất</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
