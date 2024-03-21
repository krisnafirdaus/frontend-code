import {useState} from 'react'
import {Box, Typography, TextField, Container, Button} from '@mui/material'

const ForgotPassword = () => {
	const [data, setData] = useState({
		password: '',
		confirmPassword: ''
	})
	const [error, setError] = useState('')

	const handleInput = (e) => {
		const name = e.target.name
		const value = e.target.value

		setData({
			...data,
			[name]: value
		})
	}

	const handleClick = () => {
		if(!data.password || !data.confirmPassword) {
			setError('Tolong isi inputan ini')
		}
	}

	return (
		<Container>
				<Box
					display={'flex'}
					justifyContent={'center'}
				>
					<Box
						display={'flex'}
						flexDirection={'column'}
						width={'50%'}
					>
						<Typography variant='h5' marginBottom={'60px'}>Create Password</Typography>
						<TextField name='password' error={error}  onChange={handleInput} variant='outlined' label='New Password'  helperText={error} sx={{ marginBottom: '24px'}} />
						<TextField name='confirmPassword' error={error} onChange={handleInput} variant='outlined' label='Confirm New Password' helperText={error}/>

						<Box
							marginTop={'40px'}
							display={'flex'}
							justifyContent={'end'}
							gap={'24px'}
						>
							<Button variant="outlined" sx={[{ '&:hover': { backgroundColor: 'white', border: '1px solid #5B4947' }, width: '140px', borderRadius: '8px', backgroundColor: 'white', border: '1px solid #5B4947', color: '#5B4947'  }]}>Cancel</Button>
							<Button variant="contained" onClick={handleClick} sx={[{ '&:hover': { backgroundColor: '#EA9E1F' }, width: '140px', borderRadius: '8px', backgroundColor: '#EA9E1F', color: '#5B4947'}]}>Submit</Button>
						</Box>
					</Box>
				</Box>
		</Container>
	)
}

export default ForgotPassword