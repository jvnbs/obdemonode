import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Components/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
