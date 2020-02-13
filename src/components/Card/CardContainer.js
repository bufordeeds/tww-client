import React from 'react';

const CardContainer = ({ children, className, handleClick }) => {
  return (
    <span onClick={handleClick} className={`card__container ${className}`}>
      {children}
    </span>
  );
}

export default CardContainer;
