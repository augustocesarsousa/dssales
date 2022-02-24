import { useEffect, useMemo, useState } from 'react';
import { FilterData, SalePage } from '../../types';
import { formatDate, formatGender, formatPrice } from '../../utils/formatters';
import { buildFilterParams, makeRequest } from '../../utils/request';
import Pagination from '../pagination';
import './styles.css';

type Props = {
  filterData?: FilterData;
};

const extraParams = {
  size: 12,
  sort: 'date,desc'
};

function SalesTable({ filterData }: Props) {
  const [activePage, setActivePage] = useState(0);

  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0
  });

  const params = useMemo(() => buildFilterParams(filterData, extraParams), [filterData]);

  useEffect(() => {
    params.page = activePage;

    makeRequest
      .get('/sales', { params })
      .then((response) => {
        setPage(response.data);
      })
      .catch(() => {
        console.error('Erro to fetch sales');
      });
  }, [params, activePage]);

  const changePage = (index: number) => {
    setActivePage(index);
  };

  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <Pagination page={page} onPageChance={changePage} />
      <div className="sales-table-content">
        {page.totalElements > 0 ? (
          <table className="sales-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Data</th>
                <th>Gênero</th>
                <th>Categoria</th>
                <th>Loja</th>
                <th>Forma de pagamento</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {page.content?.map((page) => (
                <tr key={page.id}>
                  <td>#{page.id}</td>
                  <td>{formatDate(page.date)}</td>
                  <td>{formatGender(page.gender)}</td>
                  <td>{page.categoryName}</td>
                  <td>{page.storeName}</td>
                  <td>{page.paymentMethod}</td>
                  <td>{formatPrice(page.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="sales-table-no-results">Sem resultados</p>
        )}
      </div>
    </div>
  );
}

export default SalesTable;
