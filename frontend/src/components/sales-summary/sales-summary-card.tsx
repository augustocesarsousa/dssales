import { ReactComponent as AvatarIcon } from '../../assets/images/avatar-icon.svg';
import './styles.css';

function SalesSummaryCard() {
  return (
    <div className="sales-summary-card base-card">
      <AvatarIcon />
      <h3 className="sales-summar-card-value">534.00</h3>
      <span className="sales-summar-card-label">Média</span>
    </div>
  );
}

export default SalesSummaryCard;
