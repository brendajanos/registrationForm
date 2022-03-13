import React from 'react'
import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom'
import RegistrationPage from '../pages/RegistrationPage'
import ConfirmationPage from '../pages/ConfirmationPage'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Navigate to="/registration"/>} />
                    <Route path="/registration" element={<RegistrationPage/>} />
                    <Route path="/email-confirmation" element={<ConfirmationPage/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
