import React, {useContext} from 'react'
import './App.css'
import {useCount, UserContext} from "shared";

const App1: React.FC = () => {

    const [count, setCount] = useCount()
    const {user} = useContext(UserContext);

    return (
        <div className="App">
            <h1>Application 1</h1>
            <p>Username: {user?.username}</p>
            <div className="card">
                <button onClick={() => setCount(count + 1)}>
                    count is {count}
                </button>
            </div>
        </div>
    )
}

export default App1
