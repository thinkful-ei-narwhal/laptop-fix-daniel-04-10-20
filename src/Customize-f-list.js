import React from 'react';
import slugify from 'slugify';
import './App.css';
import CustomizeFeature from './Feature-cust';

export default function CustomizeFeatureList(props) {

  return (
    <fieldset className="feature" key={props.featureHash}>
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {props.features[props.feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return <CustomizeFeature 
        key = {itemHash}
        onUpdate={props.onUpdate}
        itemHash = {itemHash}
        feature = {props.feature}
        selected = {props.selected}
        item = {item}
        />;})}
    </fieldset>)
}