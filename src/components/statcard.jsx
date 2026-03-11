import React from 'react';
import '../style/statcard.css';

const StatCard = ({ title, value, isCenter }) => (
    <div className="stat-card">
        <h4>{title}</h4>
        <p className={`stat-value ${isCenter ? 'text-center' : ''}`}>{value}</p>
    </div>
);

export default StatCard;