import axios from 'axios'
import { useEffect, useState } from 'react'

const Books = () => {
	const api = import.meta.env.VITE_URL_API
	const [list, setList] = useState([])

	const getList = async () => {
		const res = await axios.get(`${api}/api/Book/GetAll`)
		setList(res.data)
	}

	useEffect(() => {
		getList()
	}, [])


	return (
		<div>
			{/* {(list || [])?.map((item, index) => {
				return (
					<div key={index} style={{ height: '40px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '20px' }}>
						{item.title}
					</div>
				)
			})} */}
		</div>
	)
}

export default Books