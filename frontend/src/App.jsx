import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNavbar from './components/topNavbar'
import AdminDashboard from './pages/centralAdmin/dashboard';
import StudentDashboard from './pages/student/student';

function App() {

  return (
    <>
      <TopNavbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/student' element={<StudentDashboard/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
