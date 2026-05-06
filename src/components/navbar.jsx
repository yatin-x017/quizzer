import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav style={{ backgroundColor: "#2563eb", padding: "20px 40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
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

        <div style={{ display: "flex", gap: "30px" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Home
          </button>

          <button
            onClick={() => navigate("/quizzes")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Quizzes
          </button>

          <button
            onClick={() => navigate("/results")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Results
          </button>

          <button
            onClick={() => navigate("/signin")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;