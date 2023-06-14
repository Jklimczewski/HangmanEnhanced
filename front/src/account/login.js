import { useKeycloak } from "@react-keycloak/web";
import { useState } from 'react';

function Login() {
  const { keycloak } = useKeycloak();
  const [alert, setAlert] = useState("");

  const handleLogin = () => {
    setAlert("Redirecting...");
    setTimeout(() => {
        keycloak.login();
    }, 2000);
  }

  const handleRegister = () => {
    setAlert("Redirecting...");
    setTimeout(() => {
        keycloak.register();
    }, 2000);
  }

  return (
    <div>
        {keycloak.authenticated === false && (
            <div>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
                <button type="button" onClick={handleRegister}>
                    Register
                </button>
                <a href="/words">Words List</a>
                <br></br>
                <h1>{alert}</h1>
            </div>
        )}
        {keycloak.authenticated === false && (window.location.href = "/account")}
    </div>
  )
}

export default Login;
