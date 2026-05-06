import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";

import Home from "./page/home";
import Quiz from "./page/quiz";
import Result from "./page/result";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/results" element={<Result />} />
      </Routes>

      <Footer />
    </div>
  );
}