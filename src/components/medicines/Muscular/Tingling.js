import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import guaifenesin from '../../../images/MedicineImages/Guaifenesin.png'
import tylenol from '../../../images/MedicineImages/Acetaminophin.png'

export const Tingling = () => {

    const meds = [
        {name: "Guaifenesin", photo: guaifenesin},
        {name: "Tylenol (Acetaminophen)", photo: tylenol}
    ]

  return (
    <MedicineTemplate
       medList={meds}
    />
  )
}
