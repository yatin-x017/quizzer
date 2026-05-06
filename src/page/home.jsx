import React from "react";
import ThemeSwitch from "../theme/ThemeSwitch";
import "../theme/theme.css";

function Home() {
  return (
    <div className="landing-root">
      <header className="landing-header">
        <ThemeSwitch />
      </header>
      <main className="landing-main">
        <h1 className="landing-title">
          Ready to Test Your <span className="landing-title-accent">Knowledge?</span>
        </h1>
        <p className="landing-desc">
          Challenge yourself with thousands of questions across diverse categories.<br />
          Climb the global ranks and prove your intellect in the ultimate quiz arena.
        </p>
        <button className="landing-btn">Start Quiz</button>
        <section className="landing-cards">
          <div className="landing-card">
            <div className="landing-card-icon">📚</div>
            <div className="landing-card-title">Diverse Categories</div>
            <div className="landing-card-desc">
              From history and science to pop culture and sports, explore a vast library of meticulously curated topics.
            </div>
          </div>
          <div className="landing-card">
            <div className="landing-card-icon">⏱️</div>
            <div className="landing-card-title">Time Attacks</div>
            <div className="landing-card-desc">
              Race against the clock in high-stakes time attack modes. Perfect for quick mental workouts and adrenaline rushes.
            </div>
          </div>
          <div className="landing-card">
            <div className="landing-card-icon">🌐</div>
            <div className="landing-card-title">Global Ranks</div>
            <div className="landing-card-desc">
              Compete with players worldwide. Earn badges, climb the leaderboards, and establish your dominance.
            </div>
          </div>
        </section>
      </main>
      <footer className="landing-footer">
        <span>Quizzer</span>
        <span>©2026 Quizzer. All rights reserved.</span>
        <nav>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Help Center</a>
        </nav>
      </footer>
    </div>
  );
}

export default Home;