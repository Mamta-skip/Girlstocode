
import React, { useContext } from 'react';
import { FruitContext } from './BaseComponent';

const ChildB = () => {
  const fruitName = useContext(FruitContext);

  return (
    <div>
      <h3>Child B</h3>
      <p>Fruit Name: {fruitName}</p>
    </div>
  );
};

export default ChildB;
