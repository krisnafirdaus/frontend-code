import {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { InputAdornment, Box } from '@mui/material';
import CardComponent from "../../components/CardComponent"

const Detail = () => {
    const [state, setState] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setData(json))
    }, []) // dependency

    console.log(data)

    return (
        <div>
            <h1 style={{ fontSize: 50}}>{data.title}</h1>
            <Button onClick={() => setState(!state)} variant='text'>Click Me!</Button>
            <TextField error={state} variant='outlined' label="inputme" InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                )
            }} />

           <Box
            display={'flex'}
            justifyContent={'space-between'}
            mt={10}
            sx={{ backgroundColor: 'red' }}
           >
                <CardComponent />
                <CardComponent />
                <CardComponent />
           </Box>
        </div>
    )
}

export default Detail