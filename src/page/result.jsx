import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../theme/theme.css";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const score = location.state?.score ?? 3;
  const total = location.state?.total ?? 3;
  const timeTaken = location.state?.timeTaken ?? "01:48";
  const streak = score; 
  const accuracy = Math.round((score / total) * 100);

  let resultTitle, resultSubtitle;
  if (score === total) {
    resultTitle = "Mastermind!";
    resultSubtitle = "Module completed with exceptional precision.";
  } else if (score === 0) {
    resultTitle = "It's okay!";
    resultSubtitle = "You learn from mistakes. Keep going!";
  } else {
    resultTitle = "Good!";
    resultSubtitle = "Solid effort. Review and aim higher next time!";
  }

  const [animatedPct, setAnimatedPct] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedPct(accuracy);
    }, 100);
    return () => clearTimeout(timeout);
  }, [accuracy]);


  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (animatedPct / 100) * circumference;

  return (
    <div className="result-wrapper">
      <div className="result-panel">
        <div className="result-header">
          <h1 className="result-title">{resultTitle}</h1>
          <p className="result-subtitle">
            {resultSubtitle}
          </p>
        </div>

        <div className="result-ring-container">
          <svg
            className="result-ring-svg"
            width="180"
            height="180"
            viewBox="0 0 180 180"
          >
            <circle
              className="result-ring-track"
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              strokeWidth="10"
            />
            <circle
              className="result-ring-fill"
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset}
              transform="rotate(-90 90 90)"
            />
          </svg>
          <div className="result-ring-label">
            <span className="result-ring-value">{accuracy}<span className="result-ring-pct">%</span></span>
            <span className="result-ring-caption">ACCURACY</span>
          </div>
        </div>

        <div className="result-stats">
          <div className="result-stat-card">
            <span className="material-symbols-outlined result-stat-icon">check_circle</span>
            <span className="result-stat-value">{score} <span className="result-stat-dim">/ {total}</span></span>
            <span className="result-stat-label">Correct Answers</span>
          </div>

          <div className="result-stat-card">
            <span className="material-symbols-outlined result-stat-icon">timer</span>
            <span className="result-stat-value">{timeTaken}</span>
            <span className="result-stat-label">Time Taken</span>
          </div>

          <div className="result-stat-card">
            <span className="material-symbols-outlined result-stat-icon">local_fire_department</span>
            <span className="result-stat-value">{streak}x</span>
            <span className="result-stat-label">Perfect Streak</span>
          </div>
        </div>

        <div className="result-actions">
          <button
            className="result-btn-retake"
            onClick={() => navigate("/quizzes")}
          >
            <span className="material-symbols-outlined">restart_alt</span>
            Retake Quiz
          </button>

          <button
            className="result-btn-home"
            onClick={() => navigate("/")}
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;