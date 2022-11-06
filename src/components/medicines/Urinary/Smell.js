import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import derifil from '../../../images/MedicineImages/Etophylline.png'

export const Smell = () => {

    const meds = [
        {name: "Derifil", photo: derifil}
    ]

  return (
    <MedicineTemplate
       medList={meds}
    />
  )
}
