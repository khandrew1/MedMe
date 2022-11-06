import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import aleve from '../../../images/MedicineImages/Aleve.png'

export const RadiatePain = () => {

    const meds = [
        {name: "Aleve", photo: aleve}
    ]
    
  return (
    <MedicineTemplate
       medList={meds}
    />
  )
}
