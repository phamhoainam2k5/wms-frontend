import React from 'react';
import '../style/bestSellerTable.css';

const BestSellerTable = ({ data }) => {
    return (
        <div className="table-section-wrapper">
            <h3 className="table-title">SẢN PHẨM BÁN CHẠY NHẤT</h3>
            <div className="table-scroll-container">
                <table className="bestseller-table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Ngành hàng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BestSellerTable;