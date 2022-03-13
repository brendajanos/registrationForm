import React from 'react'
import { useRegistration } from '../contexts/registration'

const ConfirmationPage = () => {
    const registration = useRegistration()

  return (
    <div>Az {registration.basicData?.email}-re elküldtük a további információkat. </div>
  )
}

export default ConfirmationPage