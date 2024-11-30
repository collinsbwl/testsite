import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import FinanceCoach from './components/financeCoach';
import Dashboard from './components/dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/finance-coach" element={<FinanceCoach />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;