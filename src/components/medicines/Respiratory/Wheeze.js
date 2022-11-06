import React from 'react'
import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import asthmanefrine from '../../../images/MedicineImages/Racepinephrine.png'
import primatene from '../../../images/MedicineImages/PrimateneMist.png'

export const Wheeze = () => {

    const meds = [
        {name: "Asthmanefrine (Racepinephrine)", photo: asthmanefrine},
        {name: "Primatene Mist (Epinephrine)", photo: primatene}
    ]

  return (
    <MedicineTemplate
       medList={meds}
    />
  )
}
