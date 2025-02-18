import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Components/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NoPage from './Pages/NoPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
