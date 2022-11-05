import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from './SystemsTemplate';

export const Respiratory = () => {

  const symptomList = [
    { name: "Persistant Cough" },
    { name: "Fatigue" },
    { name: "Breathlessness or Wheeze"},
    { name: "Chest Infections/Congestion/Tightness"},
    { name: "Mucus Production"}
  ]

  return (
    <SystemsTemplate 
      name="Respiratory"
      symptomList={symptomList}
    />
  );
}
