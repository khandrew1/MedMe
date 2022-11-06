import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from './SystemsTemplate';

import digestPhoto from '../../images/Digestive.png';

export const Digestive = () => {
  
  const symptomList = [
    { name: "Bloating", link:"Bloating" },
    { name: "Constipation", link:"Constipation" },
    { name: "Diarrhea", link:"Diarrhea" },
    { name: "Heartburn", link:"Heartburn" },
    { name: "Nausea and Vomiting", link:"Nausea"}
  ];

  return (
    <SystemsTemplate 
      name="Digestive"
      symptomList={symptomList}
      photo={digestPhoto}
    />
  );
}
