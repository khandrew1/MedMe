import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import robitussin from '../../../images/MedicineImages/Robitussin.png'
import vicks from '../../../images/MedicineImages/VicksFormula44.png'

export const MucusProduction = () => {

  const meds = [
    {name: "Robitussin Cough", photo: robitussin},
    {name: "Vicks 44 Cough and Cold", photo: vicks}
  ]

  return (
    <MedicineTemplate
       medList={meds}
    />
  )
}
