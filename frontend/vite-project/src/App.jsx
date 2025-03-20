import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <Router> {/* Wrap with BrowserRouter */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Define Route for Home */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
