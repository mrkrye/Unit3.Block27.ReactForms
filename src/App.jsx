import './App.css'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForms'
import { useState } from 'react';


function App() {
const [token, setToken] = useState(null);

  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken} />
    </>
  );
  }
export default App
