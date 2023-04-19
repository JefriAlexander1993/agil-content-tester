import { useState, useEffect } from 'react';
import { fetchDataAll } from '../api/swapi.js';
const Pagination = ({ currentPage, totalPages, onChangePage }) => {
  const [data, setData] = useState([]);

  const handlePageChange = async (page) => {
    const newData = await fetchDataAll(page);
    setData(newData);
    onChangePage(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

