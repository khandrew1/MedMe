import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import robitussin from '../../../images/MedicineImages/Robitussin.png'
import halls from '../../../images/MedicineImages/HallsRelief.png'

export const PersistantCough = () => {

  const meds = [
    {name: "Robitussin"},
    {name: "Cough Drops"}
  ]

  return (
    <MedicineTemplate />
  )
}
