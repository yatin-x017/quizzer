import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { supabase } from "./lib/supabase";

import "./index.css";
import "./theme/theme.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./page/home";
import Quiz from "./page/quiz";
import Result from "./page/result";
import SignIn from "./page/signin";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="app-layout">
      <Navbar user={user} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<Quiz />} />
          <Route path="/results" element={<Result />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}