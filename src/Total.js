import React from 'react';
import './App.css';

export default function Total(props) {
  
  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
       0
    );
  return (
    <div className="summary__total__value">
      <p>{total}</p>
    </div>
  );

}