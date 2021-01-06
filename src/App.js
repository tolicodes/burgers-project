import React, { useState } from 'react';
import NewBurger from './components/NewBurger';
import BurgersList from './components/BurgerList'

import { getBurgers } from './api';

function App() {
  const [burgers, setBurgers] = useState(getBurgers());

  return (
    <>
      <NewBurger
        burgers={burgers}
        setBurgers={setBurgers}
      />
      <BurgersList
        burgers={burgers}
        setBurgers={setBurgers}
      />
    </>
  );
}

export default App;
