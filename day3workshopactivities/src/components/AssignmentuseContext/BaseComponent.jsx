
import React, { createContext, useState } from 'react';
import ChildA from './ChildB';

const FruitContext = createContext();

const BaseComponent = () => {
  const [fruitName, setFruitName] = useState('Apple');

  return (
    <FruitContext.Provider value={fruitName}>
      <div>
        <h1>Base Component</h1>
        <ChildA />
      </div>
    </FruitContext.Provider>
  );
};


export { BaseComponent as default, FruitContext };
