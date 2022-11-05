import React from 'react'
import { Link } from 'react-router-dom';
import { SystemsTemplate } from "./SystemsTemplate";

export const Cardiovascular = () => {
  const symptomList = [
    { name: "Chest Pain" },
    { name: "Chest Tightness" },
    { name: "Shortness of Breath" },
    { name: "Pain in neck, jaw, throat, belly or back" }
  ]

  return (
    <SystemsTemplate
      name="Cardiovascular"
      symptomList={symptomList}
    />
  );
}