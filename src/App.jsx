import { useState } from "react"

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
    </div>
  )
}