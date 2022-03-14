import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRegistration } from '../contexts/registration'

const ConfirmationPage = () => {
    const registration = useRegistration()
    const {t} = useTranslation()

    return <div>{t("confirmation", {email: registration.basicData?.email})} </div>
}

export default ConfirmationPage
