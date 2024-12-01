import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">sk.</Link>
        <nav className="nav-tabs">
          <Link 
            to="/dashboard" 
            className={`nav-tab ${location.pathname === '/dashboard' ? 'active' : ''}`}
          >
            Dashboard
          </Link>
          <Link 
            to="/financeCoach" 
            className={`nav-tab ${location.pathname === '/financeCoach' ? 'active' : ''}`}
          >
            Cubby Coach
          </Link>
          <Link 
            to="/tinder" 
            className={`nav-tab ${location.pathname === '/tinder' ? 'active' : ''}`}
          >
            Tinder
          </Link>
        </nav>
      </div>
      <div className="profile-icon">
        <div className="circle"></div>
      </div>
    </header>
  );
}

export default Header;