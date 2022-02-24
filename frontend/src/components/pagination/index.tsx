import 'bootstrap/dist/css/bootstrap.css';
import { SalePage } from '../../types';
import './styles.css';

type Props = {
  page: SalePage;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onPageChance: Function;
};

const Pagination = ({ page, onPageChance }: Props) => {
  return (
    <div className="d-flex justify-content-center pagination-container">
      <nav>
        <ul className="pagination pagination-content">
          <li className={`page-item ${page.first ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChance(page.number - 1)}>
              Anterior
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link numeration">
              {page.number + 1}/{page.totalPages}
            </span>
          </li>
          <li className={`page-item ${page.last ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChance(page.number + 1)}>
              Próxima
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
