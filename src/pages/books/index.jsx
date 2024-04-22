import axios from 'axios'
import { useEffect, useState } from 'react'

const Books = () => {
	const [list, setList] = useState([])

	const getList = async () => {
		const res = await axios.get('https://localhost:7078/api/Book/GetAll')
		setList(res.data)
	}

	useEffect(() => {
		getList()
	}, [])

	return (
		<div>
			{list.map((item, index) => {
				return (
					<div key={index} style={{ height: '40px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '20px' }}>
						{item.title}
					</div>
				)
			})}
		</div>
	)
}

export default Books