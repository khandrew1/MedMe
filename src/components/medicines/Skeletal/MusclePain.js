import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import ibuprofen from '../../../images/MedicineImages/Ibuprofen.png'
import advil from '../../../images/MedicineImages/Advil.png'
import motrin from '../../../images/MedicineImages/Motrin.png'
import midol from '../../../images/MedicineImages/Midol.png'

export const MusclePain = () => {

    const meds = [
        {name: "Ibuprofen", photo: ibuprofen},
        {name: "Advil", photo: advil},
        {name: "Motrin", photo: motrin},
        {name: "Midol", photo: midol}
    ]

  return (
    <MedicineTemplate
       medList={meds}
    />
  )
}
