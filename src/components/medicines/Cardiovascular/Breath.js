import React from 'react'

import { Link } from 'react-router-dom'
import { MedicineTemplate } from '../MedicineTemplate'

import racepinephrin from '../../../images/MedicineImages/Racepinephrine.png'
import primateneMist from '../../../images/MedicineImages/PrimateneMist.png'

export const Breath = () => {
    const meds = [
        {name: "Asthmanefrin (Racepinephrine)", photo: racepinephrin},
        {name: "Primatene Mist (Epinephrine)", photo: primateneMist}
    ]

  return (
    <MedicineTemplate
       medList={meds}
    />
  )
}