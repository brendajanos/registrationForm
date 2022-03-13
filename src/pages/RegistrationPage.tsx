import React, { FormEventHandler } from 'react'

const RegistrationPage = () => {
    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault()

        const form = event.target as HTMLFormElement

        console.table({
            email: form.email.value,
            password: form.password.value,
            birthdate: form.birthdate.value,
            newsletter: form.newsletter.value,
            cookies: form.cookies.value,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email"></input>

            <label htmlFor="password">Jelszó</label>
            <input id="password" name="password" type="password"></input>

            <label htmlFor="birthdate">Születési idő</label>
            <input id="birthdate" name="birthdate" type="date"></input>

            <label htmlFor="newsletter">Szeretnél hírleveleket?</label>
            <input id="newletter" name="newsletter" type="checkbox"></input>

            <label htmlFor="cookies">Hozzájárulsz az adatakezeléshez?</label>
            <input id="cookies" name="cookies" type="checkbox"></input>

            <input type="submit" value="Regisztrálás" />
        </form>
    )
}

export default RegistrationPage
