import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from './SystemsTemplate';

export const Urinary = () => {

  const symptomList = [
    { name: "Strong urge to urinate often" },
    { name: "Burning while Urinating" },
    { name: "Strong-smelling urine" },
    { name: "Pelvic Pain" },
  ]

  return (
    <SystemsTemplate 
      name="Urinary"
      symptomList={symptomList}
    />
  )
}
