import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from './SystemsTemplate';

import urinaryPhoto from '../../images/Urinary.png';

export const Urinary = () => {

  const symptomList = [
    { name: "Strong urge to urinate often", link: "Urge" },
    { name: "Burning while Urinating", link:"Burning" },
    { name: "Strong-smelling urine", link:"Smell" },
    { name: "Pelvic Pain", link:"PelvicPain" },
  ]

  return (
    <SystemsTemplate 
      name="Urinary"
      symptomList={symptomList}
      photo={urinaryPhoto}
    />
  )
}
