import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from './SystemsTemplate';

import digestPhoto from '../../images/Digestive.png';

export const Digestive = () => {
  
  const symptomList = [
    { name: "Bloating" },
    { name: "Constipation" },
    { name: "Diarrhea" },
    { name: "Heartburn" },
    { name: "Nausea and Vomiting"}
  ];

  return (
    <SystemsTemplate 
      name="Digestive"
      symptomList={symptomList}
      photo={digestPhoto}
    />
  );
}
