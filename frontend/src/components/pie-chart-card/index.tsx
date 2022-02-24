import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

function PieChartCard({ labels = [], name, series = [] }: Props) {
  return (
    <div className="pie-chart-card-content base-card">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width="300"
        height="400"
        series={series}
        className="pie-chart"
      />
    </div>
  );
}

export default PieChartCard;
