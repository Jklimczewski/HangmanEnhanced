import { Link, useNavigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

function Account() {
    const navigate = useNavigate();
    const { keycloak } = useKeycloak();
    return (
        <div>
            {keycloak.authenticated && (
                <div>
                    <h1>Hey</h1>
                    <Link to="/account/game"><button>Play</button></Link>
                    <Link to="/account/update"><button>Manage acc</button></Link>
                    <button onClick={() => keycloak.logout()}>Logout</button>
                </div>
            )}
            {keycloak.authenticated === false && (

                window.location.href = "/login"
            )}
        </div>
    )
}
export default Account;