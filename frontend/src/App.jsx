import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNavbar from './components/topNavbar'
import AdminDashboard from './pages/centralAdmin/dashboard';

function App() {

  return (
    <>
      <TopNavbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<AdminDashboard/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
