import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from './SystemsTemplate';

export const Skeletal = () => {

  const symptomList = [
    { name: "Muscle Pain" },
    { name: "Rashes" },
    { name: "Swollen/Painful Joints"}
  ]

  return (
    <SystemsTemplate
      name="Skeletal"
      symptomList={symptomList}
    />
  );
}