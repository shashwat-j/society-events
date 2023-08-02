import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Society from './pages/Society';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Society/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
