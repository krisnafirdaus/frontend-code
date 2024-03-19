import { useState } from "react"
import "./index.css"

const Homepage = () => {
    const [state, setState] = useState(0)
    const [data, setData] = useState({
        nama: "Andi",
        age: 20
    })

    const handleClick = () => {
        setState(state + 1)
    }

    const handleKurang = () => {
        if(state > 0) setState(state - 1)
    }

    const handleInput = (e) => {
        const value = e.target?.value
        const name = e.target?.name

        setData({
            ...data, // spread operator
            [name]: value
            // nama: value
        })
    }

    console.log(data)

    return (
        <div className="homepage">
            <h1>Homepage</h1>
            <h2>{state}</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleKurang}>Kurang</button>

            <div>
                <div>Email</div>
                <input name="nama" onChange={(e) => handleInput(e)} />

                <div>age</div>
                <input type="number" name="age" onChange={(e) => handleInput(e)} />
            </div>
        </div>
    );
}

export default Homepage