// This is a faux api that just stores burgers in memory

import BURGERS_SEED from './seed';

const BURGERS_DATABASE = [];

// seed database
BURGERS_DATABASE.push(...BURGERS_SEED)

export const getBurgers = () => {
  return BURGERS_DATABASE;
}

export const saveBurger = ({ name }) => {
  const exists = BURGERS_DATABASE.find(({ name: existingName }) => existingName === name);

  if (exists) {
    throw new Error('Burger Exists');
  }

  const newBurger = {
    id: BURGERS_DATABASE.length + 1,
    name: name,
    votes: 0,
    approved: false,
    created: (new Date()).getTime(),
    updated: (new Date()).getTime()
  };

  BURGERS_DATABASE.push(newBurger);

  return [...BURGERS_DATABASE];
}


const getBurgerById = (id) => {
  return BURGERS_DATABASE.find(({ id: currentId }) => currentId === id);
}

const update = ({ id, ...props }) => {
  const burgerIndex = BURGERS_DATABASE.findIndex(({ id: currentId }) => currentId === id);
  const burger = BURGERS_DATABASE[burgerIndex];

  const newBurger = {
    ...burger,
    ...props,
  };

  BURGERS_DATABASE.splice(burgerIndex, 1, newBurger);
  
  return [...BURGERS_DATABASE];
}

export const toggleApproved = ({ id }) => {
  const burger = getBurgerById(id);

  return update({
    id,
    approved: !burger.approved
  });
}

export const incrementVote = ({ id }) => {
  const burger = getBurgerById(id);

  return update({
    id,
    votes: burger.votes + 1
  });
}

export const decrementVote = ({ id }) => {
  const burger = getBurgerById(id);

  return update({
    id,
    votes: burger.votes - 1
  });
}