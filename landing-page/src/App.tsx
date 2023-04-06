import './App.css'
import App1 from "app1/App1";
import App2 from "app2/App2";
import {UserContext} from "shared";
import {useState} from "react";
import {User} from "shared/dist/user";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";

function App() {

    const [user, setUser] = useState<User>({
        username: "federated",
        roles: ["TEST_ROLE"],
    })

    return (
        <BrowserRouter>
            <div className="App">
                <p>
                    <NavLink to={"app1"} style={{marginRight: "10px"}}>App 1</NavLink>
                    <NavLink to={"app2"}>App 2</NavLink>
                </p>
                <p>
                    <button onClick={() =>
                        setUser({
                            username: crypto.randomUUID(),
                            roles: [] as unknown as [string],
                        })
                    }>Change User
                    </button>
                </p>
                <UserContext.Provider value={{user}}>
                    <Routes>
                        <Route path="/app1/*" element={
                            <>
                                <App1/>
                            </>
                        }/>
                        <Route path="/app2/*" element={
                            <>
                                <App2/>
                            </>
                        }/>
                    </Routes>
                </UserContext.Provider>
            </div>
        </BrowserRouter>
    )
}

export default App
