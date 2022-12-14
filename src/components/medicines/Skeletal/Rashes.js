import React from 'react'

import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import cortizone from '../../../images/MedicineImages/Cortizone.png'
import prednisone from '../../../images/MedicineImages/Prednisone.png'
import cetrizine from '../../../images/MedicineImages/Zyrtec.png'

export const Rashes = () => {

    const meds = [
        {name: "Cortizone 10", photo: cortizone},
        {name: "Prednisone (Benadryl)", photo: prednisone},
        {name: "Cetrizine (Zyrtec)", photo: cetrizine}
    ]

  return (
    <MedicineTemplate
       medList={meds}
    />
  )
}
