import React from 'react';
import './style.css';

const Categories = ({
  categories,
  filter,
  onSelectCategory,
}) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={(category === filter ? 'filter-btn active': 'filter-btn')}
            key={index}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
