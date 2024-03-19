import { useState } from "react"
import "./index.css"

const Homepage = () => {
    const [state, setState] = useState(0)

    const handleClick = () => {
        setState(state + 1)
    }

    const handleKurang = () => {
        setState(state - 1)
    }

    return (
        <div className="homepage">
            <h1>Homepage</h1>
            <h2>{state}</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleKurang}>Kurang</button>
        </div>
    );
}

export default Homepage