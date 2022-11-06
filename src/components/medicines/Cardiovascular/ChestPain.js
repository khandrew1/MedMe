import React from 'react'

import { MedicineTemplate } from '../MedicineTemplate'

import tylenol from '../../../images/MedicineImages/Acetaminophin.png'

export const ChestPain = () => {
    const meds = [
        { name: "Tylenol (acetaminophen)", photo: tylenol }
    ]

  return (
    <MedicineTemplate
       medList={meds}
    />  
)
}
