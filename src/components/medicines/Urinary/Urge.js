import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import oxy from '../../../images/MedicineImages/OxytrolWomen.png'
import vesicare from '../../../images/MedicineImages/Vesicare.png'

export const Urge = () => {

    const meds = [
        {name: "Oxytrol for Women (Oxybutynin)", photo: oxy},
        {name: "Solifenacin (Vesicare)", photo: vesicare}
    ]

  return (
    <MedicineTemplate
       medList={meds}
    />
  )
}
