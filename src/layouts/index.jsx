import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
           <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/email-confirmation">Email</Link>
                </li>
                <li>
                    <Link to="/detail">Detail</Link>
                </li>
                <li>
                    <Link to="/forgot-password">Forgot</Link>
                </li>
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