import React from 'react';
import { useGlobalContext } from '../../context';
import './style.css';

const Categories = () => {
  const { categories, filterMenu } = useGlobalContext();

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
