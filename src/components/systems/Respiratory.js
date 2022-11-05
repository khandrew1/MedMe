import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from './SystemsTemplate';

import respPhoto from '../../images/Respiratory.png';

export const Respiratory = () => {

  const symptomList = [
    { name: "Persistant Cough" },
    { name: "Fatigue" },
    { name: "Breathlessness or Wheeze"},
    { name: "Chest Congestion"},
    { name: "Mucus Production"}
  ]

  return (
    <SystemsTemplate 
      name="Respiratory"
      symptomList={symptomList}
      photo={respPhoto}
    />
  );
}
