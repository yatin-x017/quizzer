import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../theme/theme.css";

function Quiz() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.results.map((q, i) => {
          const decode = (str) => {
            const txt = document.createElement("textarea");
            txt.innerHTML = str;
            return txt.value;
          };
          const correct = decode(q.correct_answer);
          const all = [...q.incorrect_answers.map(decode), correct].sort(() => Math.random() - 0.5);
          return {
            id: i + 1,
            category: decode(q.category).toUpperCase(),
            difficulty: q.difficulty.toUpperCase(),
            text: decode(q.question),
            options: all.map((text, idx) => ({ letter: String.fromCharCode(65 + idx), text })),
            correctAnswer: String.fromCharCode(65 + all.indexOf(correct)),
          };
        });
        setQuestions(formatted);
        setLoading(false);
      });
  }, []);

  const handleSelect = (letter) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentIdx]: letter }));
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      const score = questions.reduce((acc, q, idx) => acc + (selectedAnswers[idx] === q.correctAnswer ? 1 : 0), 0);
      navigate("/results", { state: { score, total: questions.length } });
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx((prev) => prev - 1);
  };

  if (loading) {
    return <div className="quiz-wrapper"><p>Loading questions...</p></div>;
  }

  const q = questions[currentIdx];
  const progressPct = Math.round(((currentIdx + 1) / questions.length) * 100);
  const selectedLetter = selectedAnswers[currentIdx] || null;

  return (
    <div className="quiz-wrapper">
      <div className="quiz-panel">
        <div className="quiz-header">
          <div className="quiz-progress-area">
            <div className="quiz-progress-labels">
              <span className="quiz-progress-count">Question {currentIdx + 1} of {questions.length}</span>
              <span className="quiz-progress-pct">{progressPct}%</span>
            </div>
            <div className="quiz-progress-track">
              <div className="quiz-progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
          </div>
        </div>

        <div className="quiz-question-area">
          <div className="quiz-tags">
            <span className="quiz-tag">{q.category}</span>
            <span className="quiz-tag quiz-tag-secondary">{q.difficulty}</span>
          </div>
          <div className="quiz-question-row">
            <div className="quiz-question-icon">📚</div>
            <h2 className="quiz-question-text">{q.text}</h2>
          </div>
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
                  <span className="material-symbols-outlined">check_circle</span>
                </span>
              </button>
            ))}
          </div>
        </div>

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
            {currentIdx === questions.length - 1 ? "Submit Quiz" : "Submit Answer"}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;