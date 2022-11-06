import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import ibuprofen from '../../../images/MedicineImages/Ibuprofen.png'
import aleve from '../../../images/MedicineImages/Aleve.png'
import bayer from '../../../images/MedicineImages/Bayer.png'

export const PersistantHeadache = () => {

    const meds = [
        {name: "Ibuprofen", photo: ibuprofen},
        {name: "Aleve", photo: aleve},
        {name: "Bayer", photo: bayer}
    ]

  return (
    <MedicineTemplate
    medList={meds}
 />
  )
}
