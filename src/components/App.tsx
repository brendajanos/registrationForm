import React, { useState } from 'react'
import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom'
import RegistrationPage from '../pages/RegistrationPage'
import ConfirmationPage from '../pages/ConfirmationPage'
import PreferencesPage from '../pages/PreferencesPage'
import { RegistrationProvider, IBasicData } from '../contexts/registration'

function App() {

    const [basicData, setBasicData] = useState <IBasicData>()

    return (
        <Router>
            <div className="App">
                <RegistrationProvider value={{ basicData, setBasicData }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/registration" />} />
                        <Route path="/registration" element={<RegistrationPage />} />
                        <Route path="/preferences" element={<PreferencesPage />} />
                        <Route path="/email-confirmation" element={<ConfirmationPage />} />
                    </Routes>
                </RegistrationProvider>
            </div>
        </Router>
    )
}

export default App
