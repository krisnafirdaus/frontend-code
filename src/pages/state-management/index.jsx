import { useStore } from "../../store/useStore";

const StateManagement = () => {
	const { inc, count, dec } = useStore();
	
	return (
		<div style={{ background: count === 'white' ? 'white' : 'black', height: '100vh'}}>
			<h1>{count}</h1>
			<button style={{ backgroundColor: count === 'white' ? 'white' : 'black' }} onClick={inc}>Increment</button>
			<button style={{ backgroundColor: count === 'white' ? 'white' : 'black' }}  onClick={dec}>Decrement</button>
		</div>
	)
}

export default StateManagement