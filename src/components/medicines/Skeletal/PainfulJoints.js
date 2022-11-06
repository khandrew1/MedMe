import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import ibuprofen from '../../../images/MedicineImages/Ibuprofen.png'
import motrin from '../../../images/MedicineImages/Motrin.png'
import naproxen from '../../../images/MedicineImages/NaproxenSodium.png'
import aleve from '../../../images/MedicineImages/Aleve.png'
import asprin from '../../../images/MedicineImages/Aspirin.png'

export const PainfulJoints = () => {

    const meds = [
        {name: "Ibuprofen", photo: ibuprofen},
        {name: "Motrin", photo: motrin},
        {name: "Naproxen", photo: naproxen},
        {name: "Aleve", photo: aleve},
        {name: "Asprin", photo: asprin}
    ]

  return (
    <MedicineTemplate
       medList={meds}
    />
  )
}
