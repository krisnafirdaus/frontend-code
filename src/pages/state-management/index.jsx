import { useStore } from "../../store/useStore";

const StateManagement = () => {
	const { inc, count, dec } = useStore();
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={inc}>Increment</button>
			<button onClick={dec}>Decrement</button>
		</div>
	)
}

export default StateManagement