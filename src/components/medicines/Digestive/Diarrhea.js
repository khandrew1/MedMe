import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import imodium from '../../../images/MedicineImages/Imodium.png'
import pepto from '../../../images/MedicineImages/PeptoBismol.png'

export const Diarrhea = () => {

    const meds = [
        {name: "Imodium A-D (Ioperamide)", photo: imodium},
        {name: "Pepto-Bismol", photo: pepto}
    ]

  return (
    <MedicineTemplate
    medList={meds}
    />
  )
}
