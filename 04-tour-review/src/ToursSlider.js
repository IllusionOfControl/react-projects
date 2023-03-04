import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Tour from './Tour'

const useIterator = (items = [], initialIndex = 0) => {
  const [index, setIndex] = useState(initialIndex);

  const prev = () => {
    if (index === 0) return setIndex(items.length - 1);
    setIndex(index - 1);
  };

  const next = () => {
    if (index === items.length - 1) return setIndex(0);
    setIndex(index + 1);
  };

  return [items[index], prev, next];
}

const ToursSlider = ({ tours }) => {
  const [tour, prevTour, nextTour] = useIterator(tours, 0);

  return (
    <section>
      <div>
        <Tour {...tour} />
      </div>

      <div className='button-container'>
        <button className='prev-btn' onClick={prevTour}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextTour}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default ToursSlider;