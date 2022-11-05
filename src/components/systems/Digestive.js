import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from './SystemsTemplate';

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
    />
  );
}
