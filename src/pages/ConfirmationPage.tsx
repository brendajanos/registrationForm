import React from 'react'
import { useTranslation } from 'react-i18next'
import Modal from '../components/Modal'
import { useRegistration } from '../contexts/registration'

const ConfirmationPage = () => {
    const registration = useRegistration()
    const {t} = useTranslation()

    return <Modal>{t("confirmation", {email: registration.basicData?.email})} </Modal>
}

export default ConfirmationPage
