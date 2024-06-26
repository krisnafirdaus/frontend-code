import './App.css'
import Homepage from "./pages/homepage"
import EmailConfirmation from "./pages/email-confirmation"
import Detail from "./pages/detail/detail"
import ForgotPassword from "./pages/forgot-password"
import DetailProduk from "./pages/detail-produk"
import Books from './pages/books'
import CustomHooks from './pages/custom-hooks'
import StateManagement from './pages/state-management'
import { Routes, Route } from 'react-router-dom'
import Layout from "./layouts"
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
					<Route path="/" element={<PrivateRoute />}>
						<Route index element={<Homepage />} />
        	</Route>
          <Route path='/email-confirmation' element={<EmailConfirmation />} />
					<Route path="/detail" element={<PrivateRoute />}>
          	<Route index element={<Detail />} />
					</Route>
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/:id' element={<DetailProduk />} />
					<Route path='/book' element={<Books />} />
					<Route path='/custom-hooks' element={<CustomHooks />} />
					<Route path='/state-management' element={<StateManagement />} />
					<Route path='*' element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
  )
}

export default App
