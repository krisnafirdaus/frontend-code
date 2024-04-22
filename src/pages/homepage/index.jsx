import { useState } from "react"
import styled from "styled-components"
import "./index.css"

import Button from "../../components/Button"

const Input = styled.input `
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin-bottom: 20px
`

const Homepage = () => {
    const [state, setState] = useState(0)
    const [data, setData] = useState({
        nama: "Andi",
        age: 20
    })
    const gap = false

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

		console.log(import.meta.env.VITE_SOME_KEY);

    return (
        <div className="homepage">
            <h1>Homepage</h1>
            <h2>{state}</h2>
            <Button title={'Click Me'} onClick={handleClick} />
            <Button title={'Kurang'} onClick={handleKurang} />

            <div style={{ marginTop: gap ? '10px' : '24px' }}>
                <div>Email</div>
                <Input  name="nama" onChange={(e) => handleInput(e)} />

                <div>age</div>
                <Input type="number" name="age" onChange={(e) => handleInput(e)} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gap: '10px'}}>
                <div style={{ height: '50px', backgroundColor: 'blue'}}></div>
                <div style={{ height: '50px', backgroundColor: 'blue'}}></div>
                <div style={{ height: '50px', backgroundColor: 'blue'}}></div>
                <div style={{ height: '50px', gridColumn: 'span 3 / span 3', backgroundColor: 'blue'}}></div>
                <div style={{ height: '50px', backgroundColor: 'blue'}}></div>
                <div style={{ height: '50px', backgroundColor: 'blue'}}></div>
            </div>
        </div>
    );
}

export default Homepage