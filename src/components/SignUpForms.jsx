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
    <div id="sign">
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
          className="user"
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
            pattern="(?=.*[a-z]).{8}"
            title="Must contain 8 characters in length."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button>Submit</button>
        <div id="message">
          <h3>Password must contain the following:</h3>
          <p id="length" className="invalid">
            Contains <b>8 characters</b>
          </p>
    
        </div>
      </form>
    </div>
  );
}
