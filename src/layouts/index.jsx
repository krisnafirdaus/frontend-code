import { Outlet, Link, useLocation} from 'react-router-dom'

const Layout = () => {
    const {pathname} = useLocation()

    console.log(pathname)
    return (
        <div>
           <nav>
                <ul>
                <li>
                    <Link to="/" style={{ color: pathname === '/' && 'red'}}>Home</Link>
                </li>
                <li>
                    <Link to="/email-confirmation" style={{ color: pathname === '/email-confirmation' && 'red'}}>Email</Link>
                </li>
                <li>
                    <Link to="/detail" style={{ color: pathname === '/detail' && 'red'}}>Detail</Link>
                </li>
                <li>
                    <Link to="/forgot-password" style={{ color: pathname === '/forgot-password' && 'red'}}>Forgot</Link>
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