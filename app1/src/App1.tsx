import React, {useState} from 'react'
import './App.css'

const App1: React.FC = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <h1>Application 1</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </div>
    )
}

export default App1
