import {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material/styles';
import { InputAdornment, Box, Paper } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CardComponent from "../../components/CardComponent"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Detail = () => {
    const [state, setState] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }, []) // dependency

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
            mt={10}
           >
						 <Grid container spacing={0}>
								{data.map((item, index) => {
									return (
										<Grid key={index} xs={4}>
											<Item>
												<CardComponent
													title={item.title}
													body={item.body}
												/>
											</Item>
										</Grid>
									)
								})}
								</Grid>
           </Box>
        </div>
    )
}

export default Detail