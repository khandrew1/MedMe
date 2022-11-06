import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import tylenol from '../../../images/MedicineImages/Acetaminophin.png'
import asprin from '../../../images/MedicineImages/Aspirin.png'
import ibuprofen from '../../../images/MedicineImages/Ibuprofen.png'

export const Loss = () => {

    const meds = [
        {name: "Tylenol (Acetaminophen)", photo: tylenol},
        {name: "Asprin", photo: asprin},
        {name: "Ibuprofen", photo: ibuprofen}
    ]

  return (
    <MedicineTemplate
    medList={meds}
 />
  )
}
