import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StateProvider } from '@context'
import App from './App'
import '@styles/app.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <>
        <BrowserRouter>
            <React.StrictMode>
                <StateProvider>
                    <App />
                </StateProvider>
            </React.StrictMode>
        </BrowserRouter>
    </>
)
