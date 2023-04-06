import React from 'react'
import ReactDOM from 'react-dom/client'
import App1 from './App1'
import './index.css'
import {UserContext} from "shared";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <UserContext.Provider value={{
            user: {username: "standalone", roles: ["USER"]},
            setUser: (_) => {
            },
        }}>
            <BrowserRouter basename="/app1">
                <App1/>
            </BrowserRouter>
        </UserContext.Provider>
    </React.StrictMode>,
)
