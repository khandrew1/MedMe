import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import pepto from '../../../images/MedicineImages/PeptoBismol.png'

export const Nausea = () => {
    
    const meds = [
        {name: "Pepto-Bismol", photo: pepto}
    ]

  return (
    <MedicineTemplate
    medList={meds}
    />
  )
}
