import React, {useContext} from 'react'
import './App.css'
import {useCount, UserContext} from "shared";
import {NavLink, Route, Routes} from "react-router-dom";

const App1: React.FC = () => {

    const [count, setCount] = useCount()
    const {user} = useContext(UserContext);

    return (
        <div className="App">
            <h1>Application 1</h1>
            <p>
                <NavLink to={"counter"} style={{marginRight: "10px"}}>Counter</NavLink>
                <NavLink to={"user"}>User</NavLink>
            </p>
            <div className="card">
                <Routes>
                    <Route path="/user" element={<p>Username: {user?.username}</p>}/>
                    <Route path="/counter" element={
                        <button onClick={() => setCount(count + 1)}>
                            count is {count}
                        </button>
                    }/>
                </Routes>
            </div>
        </div>
    )
}

export default App1
