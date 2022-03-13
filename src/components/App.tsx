import React, { useState } from 'react'
import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom'
import RegistrationPage from '../pages/RegistrationPage'
import ConfirmationPage from '../pages/ConfirmationPage'
import PreferencesPage from '../pages/PreferencesPage'
import { RegistrationProvider, IBasicData } from '../contexts/registration'
import ProtectedRoute from './ProtectedRoute'

function App() {
    const [basicData, setBasicData] = useState<IBasicData>()

    return (
        <Router>
            <div className="App">
                <RegistrationProvider value={{ basicData, setBasicData }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/registration" />} />
                        <Route path="/registration" element={<RegistrationPage />} />
                        <Route
                            path="/preferences"
                            element={
                                <ProtectedRoute hasBasicData={!!basicData}>
                                    <PreferencesPage />{' '}
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/email-confirmation"
                            element={
                                <ProtectedRoute hasBasicData={!!basicData}>
                                    <ConfirmationPage />{' '}
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </RegistrationProvider>
            </div>
        </Router>
    )
}

export default App
