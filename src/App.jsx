import './App.css'
import Homepage from "./pages/homepage"
import EmailConfirmation from "./pages/email-confirmation"
import Detail from "./pages/detail/detail"
import ForgotPassword from "./pages/forgot-password"
import { Routes, Route } from 'react-router-dom'
import Layout from "./layouts"

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/email-confirmation' element={<EmailConfirmation />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Route>
      </Routes>
  )
}

export default App
