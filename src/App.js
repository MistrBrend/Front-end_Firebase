// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from './components/Header';
import Home from './components/Home';
import MakeUser from "./components/MakeUser";
import ErrorPage from './components/ErrorPage';

// CSS
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MakeUser" element={<MakeUser />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App;
