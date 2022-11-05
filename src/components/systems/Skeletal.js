import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from './SystemsTemplate';

import skeletalPhoto from '../../images/Skeletal.png';

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
      photo={skeletalPhoto}
    />
  );
}