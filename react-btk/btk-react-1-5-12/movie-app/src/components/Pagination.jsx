export default function Pagination({ nextPage, previousPage, currentPage, totalPages }) {
  return (
    <nav>
      <ul className="pagination d-flex justify-content-between">
        <li className="page-item">
          <button className="page-link" onClick={previousPage} disabled={currentPage === 1}>
            Önceki
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={nextPage} disabled={currentPage === totalPages}>
            Sonraki
          </button>
        </li>
      </ul>
    </nav>
  );
}