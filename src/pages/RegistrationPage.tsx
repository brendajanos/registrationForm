import React, { FormEventHandler } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useRegistration } from '../contexts/registration'

const RegistrationPage = () => {
    const navigate = useNavigate()
    const registration = useRegistration()
    const {t} = useTranslation()

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault()

        const form = event.target as HTMLFormElement

        registration.setBasicData({
            email: form.email.value,
            password: form.password.value,
            birthdate: form.birthdate.value,
            newsletter: form.newsletter.value,
            cookies: form.cookies.value,
        })

        navigate('/preferences')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">{t("reg.email")}</label>
            <input id="email" name="email" type="email" required></input>

            <label htmlFor="password">{t("reg.password")}</label>
            <input id="password" name="password" type="password" required></input>

            <label htmlFor="birthdate">{t("reg.birthdate")}</label>
            <input id="birthdate" name="birthdate" type="date" required></input>

            <label htmlFor="newsletter">{t("reg.newsletter")}</label>
            <input id="newletter" name="newsletter" type="checkbox"></input>

            <label htmlFor="cookies">{t("reg.cookies")}</label>
            <input id="cookies" name="cookies" type="checkbox" required></input>

            <input type="submit" value={t<string>("next")} />
        </form>
    )
}

export default RegistrationPage
