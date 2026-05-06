import { useState, useEffect } from "react";
import "../theme/theme.css";

// Multi-question demo dataset matching the design aesthetics perfectly
const DEMO_QUESTIONS = [
  {
    id: 1,
    category: "COMPUTER SCIENCE",
    difficulty: "HARD",
    text: "In computer science, what is the time complexity of searching for an element in a balanced Binary Search Tree (BST)?",
    options: [
      { letter: "A", text: "O(1)" },
      { letter: "B", text: "O(n)" },
      { letter: "C", text: "O(log n)" },
      { letter: "D", text: "O(n log n)" },
    ],
    correctAnswer: "C",
  },
  {
    id: 2,
    category: "DATABASE SYSTEMS",
    difficulty: "HARD",
    text: "In the context of database transaction processing, which ACID property ensures that a transaction is completed fully, or not at all?",
    options: [
      { letter: "A", text: "Consistency" },
      { letter: "B", text: "Atomicity" },
      { letter: "C", text: "Isolation" },
      { letter: "D", text: "Durability" },
    ],
    correctAnswer: "B",
  },
  {
    id: 3,
    category: "WEB DEVELOPMENT",
    difficulty: "MEDIUM",
    text: "Which of the following CSS Display values makes an element behave like a block-level grid container while keeping flow inline?",
    options: [
      { letter: "A", text: "display: grid" },
      { letter: "B", text: "display: block-grid" },
      { letter: "C", text: "display: inline-grid" },
      { letter: "D", text: "display: flow-grid" },
    ],
    correctAnswer: "C",
  },
];

function Quiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes countdown
  const [quizFinished, setQuizFinished] = useState(false);

  // Countdown timer logic
  useEffect(() => {
    if (timeLeft <= 0 || quizFinished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quizFinished]);

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSelect = (letter) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIdx]: letter,
    }));
  };

  const handleNext = () => {
    if (currentIdx < DEMO_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswers({});
    setTimeLeft(180);
    setQuizFinished(false);
  };

  if (quizFinished) {
    // Elegant Completion View
    const score = DEMO_QUESTIONS.reduce((acc, q, idx) => {
      return acc + (selectedAnswers[idx] === q.correctAnswer ? 1 : 0);
    }, 0);

    return (
      <div className="quiz-wrapper">
        <div className="quiz-panel" style={{ textAlign: "center", alignItems: "center" }}>
          <div className="quiz-question-icon" style={{ fontSize: "48px", width: "80px", height: "80px", borderRadius: "50%", margin: "0 auto" }}>
            🏆
          </div>
          <h2 className="quiz-question-text" style={{ fontSize: "32px", margin: "16px 0" }}>Quiz Completed!</h2>
          <p className="hero-description" style={{ marginBottom: "24px" }}>
            Great job! You finished the quiz. Here is your summary:
          </p>
          <div style={{ display: "flex", gap: "24px", margin: "16px 0" }}>
            <div className="quiz-timer" style={{ padding: "16px 24px" }}>
              <span className="quiz-timer-value" style={{ fontSize: "28px", color: "var(--primary)" }}>
                {score} / {DEMO_QUESTIONS.length}
              </span>
              <span className="quiz-progress-count" style={{ display: "block", fontSize: "10px", marginTop: "4px" }}>SCORE</span>
            </div>
            <div className="quiz-timer" style={{ padding: "16px 24px" }}>
              <span className="quiz-timer-value" style={{ fontSize: "28px" }}>
                {Math.round((score / DEMO_QUESTIONS.length) * 100)}%
              </span>
              <span className="quiz-progress-count" style={{ display: "block", fontSize: "10px", marginTop: "4px" }}>ACCURACY</span>
            </div>
          </div>
          <button className="hero-cta" onClick={handleRestart} style={{ cursor: "pointer", border: "none" }}>
            Retake Quiz
            <span className="material-symbols-outlined">restart_alt</span>
          </button>
        </div>
      </div>
    );
  }

  const q = DEMO_QUESTIONS[currentIdx];
  const progressPct = Math.round(((currentIdx + 1) / DEMO_QUESTIONS.length) * 100);
  const selectedLetter = selectedAnswers[currentIdx] || null;

  return (
    <div className="quiz-wrapper">
      <div className="quiz-panel">
        {/* Progress & Timer Header */}
        <div className="quiz-header">
          <div className="quiz-progress-area">
            <div className="quiz-progress-labels">
              <span className="quiz-progress-count">
                Question {currentIdx + 1} of {DEMO_QUESTIONS.length}
              </span>
              <span className="quiz-progress-pct">{progressPct}%</span>
            </div>
            <div className="quiz-progress-track">
              <div
                className="quiz-progress-fill"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          <div className="quiz-timer">
            <span className="material-symbols-outlined">timer</span>
            <span className="quiz-timer-value">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Question Area */}
        <div className="quiz-question-area">
          {/* Category Tags */}
          <div className="quiz-tags">
            <span className="quiz-tag">{q.category}</span>
            <span className="quiz-tag quiz-tag-secondary">{q.difficulty}</span>
          </div>

          {/* Question Text */}
          <div className="quiz-question-row">
            <div className="quiz-question-icon">📚</div>
            <h2 className="quiz-question-text">{q.text}</h2>
          </div>

          {/* Answer Options */}
          <div className="quiz-answers">
            {q.options.map((opt) => (
              <button
                key={opt.letter}
                className={`quiz-answer${selectedLetter === opt.letter ? " selected" : ""}`}
                onClick={() => handleSelect(opt.letter)}
              >
                <div className="quiz-answer-badge">{opt.letter}</div>
                <span className="quiz-answer-text">{opt.text}</span>
                <span className="quiz-answer-check">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="quiz-actions">
          <button
            className="quiz-btn-prev"
            onClick={handlePrev}
            disabled={currentIdx === 0}
            style={{ opacity: currentIdx === 0 ? 0.4 : 1, cursor: currentIdx === 0 ? "not-allowed" : "pointer" }}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Previous
          </button>
          <button
            className="quiz-btn-submit"
            onClick={handleNext}
            disabled={!selectedLetter}
            style={{ opacity: !selectedLetter ? 0.6 : 1, cursor: !selectedLetter ? "not-allowed" : "pointer", border: "none" }}
          >
            {currentIdx === DEMO_QUESTIONS.length - 1 ? "Submit Quiz" : "Submit Answer"}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;