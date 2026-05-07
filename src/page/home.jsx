import React from "react";
import { useNavigate } from "react-router-dom";
import "../theme/theme.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Ready to Test Your{" "}
            <span className="hero-title-accent">Knowledge?</span>
          </h1>

          <p className="hero-description">
            Enter the arena of intellect. Challenge yourself across infinite
            topics, race the clock, and climb the global leaderboards in a
            sleek, high-performance environment.
          </p>

          <button
            className="hero-cta"
            onClick={() => navigate("/quizzes")}
          >
            <span className="material-symbols-outlined">play_arrow</span>
            Start Quiz
          </button>
        </div>
      </section>


      <section className="features-section">
        <div className="features-grid">
          {/* Feature Card 1 */}
          <div className="feature-card">
            <div className="feature-card-icon">
              <span className="material-symbols-outlined">category</span>
            </div>
            <h3 className="feature-card-title">Diverse Categories</h3>
            <p className="feature-card-desc">
              From aerospace engineering to ancient history, our vast database
              covers thousands of meticulously curated topics to test your
              depth of knowledge.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-card-icon">
              <span className="material-symbols-outlined">timer</span>
            </div>
            <h3 className="feature-card-title">Time Attacks</h3>
            <p className="feature-card-desc">
              Feel the pressure in rapid-fire modes. Precision and speed are
              rewarded equally as you race against the relentless countdown
              timer.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card-icon">
              <span className="material-symbols-outlined">public</span>
            </div>
            <h3 className="feature-card-title">Global Ranks</h3>
            <p className="feature-card-desc">
              Ascend the echelon of neo-scholars. Track your ELO, compare
              stats with global competitors, and cement your legacy on the
              leaderboards.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;