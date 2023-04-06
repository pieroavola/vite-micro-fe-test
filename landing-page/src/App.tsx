import './App.css'
import App1 from "app1/App1";
import App2 from "app2/App2";
import {UserContext} from "shared";
import {useState} from "react";
import {User} from "shared/dist/user";

function App() {

    const [user, setUser] = useState<User>({
        username: "federated",
        roles: ["TEST_ROLE"],
    })

    return (
        <div className="App">
            <UserContext.Provider value={{user, setUser}}>
                <App1/>
                <App2/>
            </UserContext.Provider>
        </div>
    )
}

export default App
