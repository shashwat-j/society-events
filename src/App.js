import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Society from './pages/Society';
import Societies from './pages/Societies';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Society/>} />
          <Route path='/societies' element={<Societies/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
