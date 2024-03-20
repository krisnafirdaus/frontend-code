import {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { InputAdornment, Box } from '@mui/material';
import CardComponent from "../../components/CardComponent"

const Detail = () => {
    const [state, setState] = useState(false)
    return (
        <div>
            <h1>Detail</h1>
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
           >
                <CardComponent />
                <CardComponent />
                <CardComponent />
           </Box>
        </div>
    )
}

export default Detail