import React, {useState} from 'react'
import './App.css'

const App2: React.FC = () => {
    const [count2, setCount2] = useState(0)

    return (
        <div className="App">
            <h1>Application 2</h1>
            <div className="card">
                <button onClick={() => setCount2((count) => count + 1)}>
                    count is {count2}
                </button>
            </div>
        </div>
    )
}

export default App2
