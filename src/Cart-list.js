import React from 'react';
import './App.css';
import CartFeature from './Feature-cart';

export default function CartList(props) {

  console.log(props);
  

  return (
    <div>
      {Object.keys(props.selected).map((feature, i) => { 
        return <CartFeature 
        featureHash = {`${feature}-${i}`}
        selectedOption = {props.selected[feature]}
        selected={props.selected}/>})}
    </div>
  )

}


