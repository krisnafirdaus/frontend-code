import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom'
import axios from 'axios';

const DetailProduk = () => {
    const {id} = useParams();
    const location = useLocation();
    const [dataDetail, setDataDetail] = useState({});
    const [dataPost, setDataPost] = useState({
        title: '',
        body: '',
        userId: 10,
    });

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((json) => console.log(json));
    }, []);

    const getDetailData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then((json) => setDataDetail(json.data));
    }

    const handleChange = (e) => {
        setDataPost({
            ...dataPost,
            [e.target.name]: e.target.value,
        });
    }

    const postData = () => {
        axios.post(`https://jsonplaceholder.typicode.com/posts`, dataPost)
        .then(() => alert('Data berhasil di post'));
    }

    const putData = () => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/1`, dataPost)
        .then(() => alert('Data berhasil di put'));
    }

    const deleteData = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(() => alert('Data berhasil di delete'));
    }

    const dataList = [
        {
            id: 1,
            title: 'title 1',
        },
        {
            id: 2,
            title: 'title 2',
        },
        {
            id: 3,
            title: 'title 3',
        },
    ]

    return (
        <div>
            <h1>Detail Produk</h1>
            <input name="title" placeholder='masukkan title' onChange={handleChange} />
            <input name="body" placeholder='masukkan body' onChange={handleChange} />
            <button onClick={postData}>Post data</button>
            <div>
               {dataList.map((item, index) => {
                     return (
                          <div key={index}>
                            <p>{item.title}</p>
                            <button onClick={() => deleteData(item.id)}>Hapus</button>
                          </div>
                     )
               })}
            </div>
          <div>
          {dataDetail.title && <p>{dataDetail.title}</p>}
            <button onClick={getDetailData}>Get Data</button>
          </div>
        </div>
    );
}

export default DetailProduk;