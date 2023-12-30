import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Calender from './pages/Calender';



function App() {
  return (
    <>
    <BrowserRouter>
    <div style={{ display: 'flex' }}>
    <Sidebar />
      <Routes>
        <Route path="/" element={<Calender />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
