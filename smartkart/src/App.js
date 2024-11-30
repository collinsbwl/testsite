import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import financeCoach from './components/financeCoach';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Navigate to="http://localhost:8501" />} /> {/* Your Streamlit URL */}
          <Route path="/finance-coach" element={<financeCoach />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;