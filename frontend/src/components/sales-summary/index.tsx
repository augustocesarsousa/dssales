import React from 'react';
import { ReactComponent as AvatarIcon } from '../../assets/images/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/images/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/images/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/images/sync-icon.svg';
import SalesSummaryCard from './sales-summary-card';
import './styles.css';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard icon={<DoneIcon />} value={534.0} label="Média" />
      <SalesSummaryCard icon={<SyncIcon />} value={44434} label="Quantidade" />
      <SalesSummaryCard icon={<BarChartIcon />} value={434.0} label="Mínima" />
      <SalesSummaryCard icon={<AvatarIcon />} value={3434.0} label="Máxima" />
    </div>
  );
}

export default SalesSummary;
