import React from 'react'
import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import robitussin from '../../../images/MedicineImages/Robitussin.png'
import mucinex from '../../../images/MedicineImages/Mucinex.png'

export const ChestTightness = () => {

    const meds = [
        { name: "Robitussin", photo: robitussin },
        { name: "Mucinex", photo: mucinex }
    ]

  return (
    <MedicineTemplate
    medList={meds}
    />
  )
}
