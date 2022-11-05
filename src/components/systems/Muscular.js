import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from './SystemsTemplate';

export const Muscular = () => {

  const symptomList = [
    { name: "Muscle Weakness" },
    { name: "Cramps" },
    { name: "Muscle Loss" },
    { name: "Tingling or Painful Sensations"}
  ];

  return (
    <SystemsTemplate
      name="Muscular"
      symptomList={symptomList}
    />
  )
}
