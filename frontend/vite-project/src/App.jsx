import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import './App.css';
import Form from './components/form';
import Drop from './components/drop';
function App() {
  return (
    <Router> {/* Wrap with BrowserRouter */}
      <div>
        <Routes>
          <Route path="/" element={<Home/>} /> {/* Define Route for Home */}
          <Route path='/search' element={<Form/>}></Route>
        </Routes>
        <Drop/>
      </div>
    </Router>
  );
}

export default App;
