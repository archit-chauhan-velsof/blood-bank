import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  // console.log(totalPages);
  if (totalPages === 0) {
    return;
  }

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation" className="pagination-nav">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Previous"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {pageNumbers.map((e) => {
          return (
            <li className="page-item" key={e}>
              <button
                className={`page-link ${currentPage === e ? "active" : ""}`}
                onClick={() => setCurrentPage(e)}
              >
                {e}
              </button>
            </li>
          );
        })}
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Next"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
