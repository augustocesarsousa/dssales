import React, { useEffect, useMemo, useState } from 'react';
import { ReactComponent as AvatarIcon } from '../../assets/images/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/images/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/images/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/images/sync-icon.svg';
import { FilterData, SalesSummaryData } from '../../types';
import { buildFilterParams, makeRequest } from '../../utils/request';
import SalesSummaryCard from './sales-summary-card';
import './styles.css';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  min: 0,
  max: 0,
  avg: 0,
  count: 0
};

function SalesSummary({ filterData }: Props) {
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Erro to fetch sales by date');
      });
  }, [params]);

  return (
    <div className="sales-summary-container">
      <SalesSummaryCard icon={<DoneIcon />} value={summary?.avg?.toFixed(2)} label="Média" />
      <SalesSummaryCard icon={<SyncIcon />} value={summary?.count} label="Quantidade" />
      <SalesSummaryCard icon={<BarChartIcon />} value={summary?.min} label="Mínima" />
      <SalesSummaryCard icon={<AvatarIcon />} value={summary?.max} label="Máxima" />
    </div>
  );
}

export default SalesSummary;
