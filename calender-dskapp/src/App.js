import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MyCalender from './pages/MyCalender';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyCalender />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
