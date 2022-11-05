import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from './SystemsTemplate';

export const Nervous = () => {

  const symptomList = [
    { name: "Persistant Headache" },
    { name: "Loss of feeling or tingling" },
    { name: "Back pain which radiates through body"}
  ];

  return (
    <SystemsTemplate
      name="Nervous"
      symptomList={symptomList}
    />
  );
}
