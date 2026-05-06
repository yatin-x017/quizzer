import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function Navbar({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const btnStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    textDecoration: "none",
  };

  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        padding: "20px 40px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          <p
            style={{
              margin: 0,
              fontSize: "20px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Quizzer
          </p>
        </div>

        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <button onClick={() => navigate("/")} style={btnStyle}>
            Home
          </button>

          <button onClick={() => navigate("/quizzes")} style={btnStyle}>
            Quizzes
          </button>

          <button onClick={() => navigate("/results")} style={btnStyle}>
            Results
          </button>
          {user ? (
            <>
              <span style={{ color: "#fff", fontSize: "14px" }}>
                {user.email}
              </span>

              <button onClick={handleLogout} style={btnStyle}>
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => navigate("/signin")} style={btnStyle}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;