import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import azo from '../../../images/MedicineImages/AzoUrinaryPainRelief.png'
import monurol from '../../../images/MedicineImages/Monurol.png'

export const Burning = () => {

    const meds = [
        {name: "AZO Urinary Pain Relief", photo: azo},
        {name: "Fosfomycin (Monurol)", photo: monurol}
    ]

  return (
    <MedicineTemplate
       medList={meds}
    />
  )
}
