import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Cake from './Pages/Home page/Cake/Cake';
import Home from './MainComponent/Home';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Cake" element={<Cake />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
