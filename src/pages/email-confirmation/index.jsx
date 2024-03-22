import {useEffect} from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/material'
import ImageNavbar from "../../assets/image-navbar-confirm.png"
import ImageBody from "../../assets/image-body-confirm.png"

const EmailConfirmation = () => {
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate('/')
    }

    return (
        <Container>
            <div className="navbar-email-confirmation">
                <div className='flex items-center'>
                    <div className='mr-10'><img src={ImageNavbar} /></div>
                    <div className='fon-400 text-24'>Language</div>
                </div>
            </div>

            <div className="body-email-confirmation">
                <div className='flex flex-col items-center'>
                    <div ><img src={ImageBody} /></div>
                    <div className='mt-40 text-24 font-500 text-green'>Email Confirmation Success</div>
                    <div className='mt-8 text-16 text-gray-light'>Thanks for confirmation your email. Please login first</div>
                    <div className='mt-40'>
                        <button onClick={handleRedirect} className='px-24 py-16 bg-green text-white border-none rounded-6 font-600'>Login Here</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default EmailConfirmation