import React from 'react';
import './App.css';
import CustomizeFeatureList from './Customize-f-list';

export default function CustomizeList(props) {

  return (
    <div>
      {Object.keys(props.features).map((feature, i) => { 
        return <CustomizeFeatureList 
        feature = {feature}
        featureHash = {`${feature}-${i}`}
        features={props.features}
        selected={props.selected}
        onUpdate={props.onUpdate}
        />})
      }
    </div>
  );
}