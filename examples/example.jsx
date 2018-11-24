import React from 'react';

const ListItem = (props) => {
  return <li>{props.value}</li>;
};

const numbersToList = (number) => {
  return <ListItem key={number.toString()} value={number} />;
};

const NumberList = (props) => {
  const { numbers } = props;
  return <ul children={numbers.map(numbersToList)} />;
};

export default NumberList;
