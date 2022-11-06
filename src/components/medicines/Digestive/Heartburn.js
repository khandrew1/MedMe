import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import mylanta from '../../../images/MedicineImages/Mylanta.png'
import rolaids from '../../../images/MedicineImages/Rolaids.png'
import tums from '../../../images/MedicineImages/Tums.png'

export const Heartburn = () => {

    const meds = [
        {name: "Mylanta", photo: mylanta},
        {name: "Rolaids", photo: rolaids},
        {name: "Tums", photo: tums}
    ]

  return (
    <MedicineTemplate
        medList={meds}
    />
  )
}
