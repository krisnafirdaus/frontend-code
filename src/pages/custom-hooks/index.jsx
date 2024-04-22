import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import useFormInput from '../../hooks/useFormInput'

const CustomHooks = () => {
	const navigate = useNavigate()
	const name = useFormInput('');
	const age = useFormInput(0);
	const [token, setToken] = useState('');

	const handleLocalStorage = () => {
		localStorage.setItem('token', name.value);
		navigate(0);
	}

	const handleClearToken = () => {
		localStorage.removeItem('token');
		navigate(0);
	}

	useEffect(() => {
		const token = localStorage.getItem('token');
		setToken(token);
	}, []);

	return (
		<div>
			<input {...name} />
			<input {...age} />
			{!token && <button onClick={handleLocalStorage}>Login</button>}
			{token && <button onClick={handleClearToken}>Logout</button>}
		</div>
	);
}

export default CustomHooks