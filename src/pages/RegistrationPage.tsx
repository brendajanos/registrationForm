import React, { FormEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRegistration } from '../contexts/registration'


const RegistrationPage = () => {
    const navigate = useNavigate()
    const registration = useRegistration()

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
        
        navigate("/preferences")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" >Email</label>
            <input id="email" name="email" type="email" required></input>

            <label htmlFor="password">Jelszó</label>
            <input id="password" name="password" type="password" required></input>

            <label htmlFor="birthdate">Születési idő</label>
            <input id="birthdate" name="birthdate" type="date" required></input>

            <label htmlFor="newsletter">Szeretnél hírleveleket?</label>
            <input id="newletter" name="newsletter" type="checkbox"></input>

            <label htmlFor="cookies">Hozzájárulsz az adatakezeléshez?</label>
            <input id="cookies" name="cookies" type="checkbox" required></input>

            <input type="submit" value="Következő" />
        </form>
    )
}

export default RegistrationPage
