import React from 'react';
import SalesSummaryCard from './sales-summary-card';
import './styles.css';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard />
      <SalesSummaryCard />
      <SalesSummaryCard />
      <SalesSummaryCard />
    </div>
  );
}

export default SalesSummary;
