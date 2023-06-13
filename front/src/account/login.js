import { useNavigate } from 'react-router-dom';
import { useKeycloak } from "@react-keycloak/web";

function Login() {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  return (
    <div>
        {keycloak.authenticated === false && (
            <div>
                <button type="button" onClick={() => keycloak.login()}>
                    Login
                </button>
                <button type="button" onClick={() => keycloak.register()}>
                    Register
                </button>
                <a href="/words">Words List</a>
            </div>
        )}
        {keycloak.authenticated && (
            
            window.location.href = "/account"
        )}
    </div>
  )
}

export default Login;
