import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from './SystemsTemplate';

import nervousPhoto from '../../images/Nervous.png';

export const Nervous = () => {

  const symptomList = [
    { name: "Persistant Headache", link: "PersistantHeadache" },
    { name: "Loss of feeling or tingling", link:"Loss" },
    { name: "Back pain which radiates through body", link: "RadiatePain"}
  ];

  return (
    <SystemsTemplate
      name="Nervous"
      symptomList={symptomList}
      photo={nervousPhoto}
    />
  );
}
