import { useState } from "react";

export default function SignUpForm({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup"
      );
      const result = await response.json();
      setToken(result.name);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
        <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />

        <label>
        Password:
          <input
          className="pass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
