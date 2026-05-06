import { useNavigate } from "react-router-dom";
import ThemeSwitch from "../theme/ThemeSwitch";

function Navbar({ user }) {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <span className="material-symbols-outlined">psychology</span>
          Quizzer
        </div>

        <div className="navbar-actions">
          <ThemeSwitch />
          <button
            className="navbar-icon-btn"
            aria-label="Account"
            onClick={() => (user ? null : navigate("/signin"))}
          >
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;