import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import miralax from '../../../images/MedicineImages/Miralax.png'
import dulcolax from '../../../images/MedicineImages/Dulcolax.png'
import pedia from '../../../images/MedicineImages/Pedialax.png'

export const Constipation = () => {

    const meds = [
        {name: "miraLAX", photo: miralax},
        {name: "Dulcolax", photo: dulcolax},
        {name: "Pedia-Lax", photo: pedia},
    ]

  return (
    <MedicineTemplate
        medList={meds}
    />
  )
}
