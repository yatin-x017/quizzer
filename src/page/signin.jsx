import { supabase } from "../lib/supabase";

export default function SignIn() {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Sign In</h2>

      <button onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
    </div>
  );
}