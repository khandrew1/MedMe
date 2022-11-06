import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import naproxen from '../../../images/MedicineImages/NaproxenSodium.png'
import tylenol from '../../../images/MedicineImages/Acetaminophin.png'
import ibuprofen from '../../../images/MedicineImages/Ibuprofen.png'

export const Cramps = () => {

    const meds = [
        {name: "Naproxen", photo: naproxen},
        {Name: "Tylenol (Acetaminophen)", photo: tylenol},
        {Name: "Ibuprofen", photo: ibuprofen}
    ]
    
  return (
    <MedicineTemplate
    medList={meds}
    />
  )
}
