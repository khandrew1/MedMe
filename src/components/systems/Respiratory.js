import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from './SystemsTemplate';

import respPhoto from '../../images/Respiratory.png';

export const Respiratory = () => {

  const symptomList = [
    { name: "Persistant Cough", link: "PersistantCough" },
    { name: "Breathlessness or Wheeze", link: "Wheeze" },
    { name: "Chest Congestion", link: "ChestCongestion" },
    { name: "Mucus Production", link: "MucusProduction" }
  ]

  return (
    <SystemsTemplate 
      name="Respiratory"
      symptomList={symptomList}
      photo={respPhoto}
    />
  );
}
