import React from 'react'
import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import pepto from '../../../images/MedicineImages/PeptoBismol.png'
import lactase from '../../../images/MedicineImages/LactaseEnzyme.png'

export const Bloating = () => {

    const meds = [
        {name: "Pepto-Bismol", photo: pepto},
        {name: "Lactase Enzyme", photo: lactase}
    ]

  return (
    <MedicineTemplate
        medList={meds}
    />
  )
}
