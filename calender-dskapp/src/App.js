import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MyCalender from './pages/MyCalender';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <>
    <BrowserRouter>
    <Sidebar />
      <Routes>
        <Route path="/" element={<MyCalender />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
