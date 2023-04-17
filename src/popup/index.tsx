import React from 'react'
import ReactDOM from 'react-dom/client'

import { Popup } from './components/popup'

import './popup.css'

const root = ReactDOM.createRoot(document.getElementById('popup-root') as HTMLElement)

root.render(<Popup />)
