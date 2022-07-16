import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Tour from './Tour'

const ToursSlider = ({ tours }) => {
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    const lastTour = tours.length - 1;
    if (number > lastTour) {
      return 0;
    }
    if (number < 0) {
      return lastTour;
    }
    return number;
  };

  const nextTour = () => {
    setIndex((index) => {
      return checkNumber(index + 1);
    })
  }

  const prevTour = () => {
    setIndex((index) => {
      return checkNumber(index - 1);
    })
  }

  return (
    <section>
      <div>
        <Tour {...tours[index]} />
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