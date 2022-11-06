import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from './SystemsTemplate';

import muscularPhoto from '../../images/Muscular.png';

export const Muscular = () => {

  const symptomList = [
    { name: "Cramps", link:"Cramps" },
    { name: "Tingling or Painful Sensations", link:"Tingling"}
  ];

  return (
    <SystemsTemplate
      name="Muscular"
      symptomList={symptomList}
      photo={muscularPhoto}
    />
  )
}
