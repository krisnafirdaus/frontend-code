import { Outlet, Link, useLocation} from 'react-router-dom'
import { useStore } from '../store/useStore'

const Layout = () => {
    const {pathname} = useLocation()

    const navData = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/email-confirmation',
            name: 'Email'
        },
        {
            path: '/detail',
            name: 'Detail'
        },
        {
            path: '/forgot-password',
            name: 'Forgot'
        }
    ]
    const {count} = useStore();

    return (
        <div style={{ background: count === 'white' ? 'white' : 'black'}}>
           <nav>
                <ul>
                    {navData.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path} style={{ color: pathname === item.path && 'red' }}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Outlet />
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    )
}

export default Layout