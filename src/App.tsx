import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Page1 from "./Page1.tsx";
import Page2 from "./Page2.tsx";

function App() {

  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/page1" />} />
            <Route path="/page1" element={<Page1/>} />
            <Route path="/page2" element={<Page2/>} />
        </Routes>
    </HashRouter>
  )
}

export default App
