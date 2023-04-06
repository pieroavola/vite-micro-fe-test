import React from 'react'
import './App.css'
import {useCount} from "shared"

const App2: React.FC = () => {
    const [count, setCount] = useCount()

    return (
        <div className="App">
            <h1>Application 2</h1>
            <div className="card">
                <button onClick={() => setCount(count + 1)}>
                    count is {count}
                </button>
            </div>
        </div>
    )
}

export default App2
