import React from 'react'
import ReactDOM from 'react-dom/client'
import App1 from './App1'
import './index.css'
import {UserContext} from "shared";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <UserContext.Provider value={{
            user: {username: "standalone", roles: ["USER"]},
            setUser: (_) => {
            },
        }}>
            <App1/>
        </UserContext.Provider>
    </React.StrictMode>,
)
