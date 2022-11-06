import React from 'react'
import { Link } from 'react-router-dom';
import { MedicineTemplate } from '../MedicineTemplate'

import asthmanefrine from '../../../images/MedicineImages/Racepinephrine.png'
import primatene from '../../../images/MedicineImages/PrimateneMist.png'

export const Wheeze = () => {

    const meds = [
        {name: "Asthmanefrine (Racepinephrine)"},
        {name: "Primatene Mist (Epinephrine)"}
    ]

  return (
    <MedicineTemplate />
  )
}
