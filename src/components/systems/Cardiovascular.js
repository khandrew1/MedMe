import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from "./SystemsTemplate";

import cardioPhoto from '../../images/Cardiovascular.png';

export const Cardiovascular = () => {
  const symptomList = [
    { name: "Chest Pain", link: "ChestPain" },
    { name: "Chest Tightness", link: "ChestTightness" },
    { name: "Shortness of Breath", link: "Breath" },
    { name: "Pain in neck, jaw, throat, belly or back", link:"NeckPain" }
  ]

  return (
    <SystemsTemplate
      name="Cardiovascular"
      symptomList={symptomList}
      photo={cardioPhoto}
    />
  );
}