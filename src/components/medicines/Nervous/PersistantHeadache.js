import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import ibuprofen from '../../../images/MedicineImages/Ibuprofen.png'
import aleve from '../../../images/MedicineImages/Aleve.png'
import bayer from '../../../images/MedicineImages/Bayer.png'

export const PersistantHeadache = () => {

    const meds = [
        {name: "Ibuprofen"},
        {name: "Aleve"},
        {name: "Bayer"}
    ]

  return (
    <div>PersistantHeadache</div>
  )
}
