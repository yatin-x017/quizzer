import { useState } from "react"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import QuizBoard from "./components/quiz-board"
import Score from "./components/score"
import Home from "./page/home"
import Quiz from "./page/quiz"
import Result from "./page/result"

export default function App() {
  const [phase, setPhase] = useState("home")

  return (
    <div>
      {phase === "home"    && <p>HOME screen</p>}
      {phase === "quiz"    && <p>QUIZ screen</p>}
      {phase === "results" && <p>RESULTS screen</p>}

      <button onClick={() => setPhase("home")}>Home</button>
      <button onClick={() => setPhase("quiz")}>Quiz</button>
      <button onClick={() => setPhase("results")}>Results</button>
      <Navbar />
      <Home />
      <Quiz />
      <Result />
      <QuizBoard />
      <Score />
      <Footer />
    </div>
  )
}