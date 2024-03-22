import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'

const DetailProduk = () => {
    const {id} = useParams();
    const location = useLocation();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => console.log(json));
    }, []);

    return (
        <div>
            <h1>Detail Produk</h1>
            <p>Detail Produk</p>
        </div>
    );
}

export default DetailProduk;