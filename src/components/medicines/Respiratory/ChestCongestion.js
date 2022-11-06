import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import robitussin from '../../../images/MedicineImages/Robitussin.png'
import mucinex from '../../../images/MedicineImages/Mucinex.png'

export const ChestCongestion = () => {

    const meds = [
        {name: "Robitussin (Dextromethorphan)", photo: robitussin},
        {name: "Mucinex (Guaifenesin)", photo: mucinex}
    ]

  return (
    <MedicineTemplate
       medList={meds}
    />
  )
}
