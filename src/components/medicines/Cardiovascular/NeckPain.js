import React from 'react'
import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import ibuprofen from '../../../images/MedicineImages/Ibuprofen.png'
import motrin from '../../../images/MedicineImages/Motrin.png'
import aleve from '../../../images/MedicineImages/Aleve.png'

export const NeckPain = () => {

    const meds = [
        { name: "Ibuprofen", photo: ibuprofen },
        { name: "Motrin", photo: motrin },
        { name: "Aleve", photo: aleve }
    ]

  return (
    <MedicineTemplate
    medList={meds}
    />
  )
}
