import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import ibuprofenPic from '../../../images/MedicineImages/Ibuprofen.png'
import alevePic from '../../../images/MedicineImages/Aleve.png'
import motrinPic from '../../../images/MedicineImages/Motrin.png'

export const PelvicPain = () => {

    const meds = [
        {name: "Ibuprofen", photo: ibuprofenPic},
        {name: "Aleve", photo: alevePic},
        {name: "Motrin", photo: motrinPic}
    ]

  return (
    <MedicineTemplate
       medList={meds}
    />
  )
}
