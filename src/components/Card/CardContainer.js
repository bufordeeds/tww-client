import React from 'react';

const CardContainer = ({ children }) => {
  return (
    <span className='card__container'>
      {children}
    </span>
  );
}

export default CardContainer;
