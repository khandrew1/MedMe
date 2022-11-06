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
        {name: "Ibuprofen"},
        {name: "Motrin"},
        {name: "Naproxen"},
        {name: "Aleve"},
        {name: "Asprin"}
    ]

  return (
    <div>PainfulJoints</div>
  )
}
