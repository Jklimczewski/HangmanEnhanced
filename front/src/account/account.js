import { Link } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import { useState } from "react";

function Account() {
    const [alert, setAlert] = useState("");
    const { keycloak } = useKeycloak();

    const handleLogout = () => {
        setAlert("Loging out...");
        setTimeout(() => {
            keycloak.logout();
        }, 2000);
      }
    
    const handleUpdate = () => {
    setAlert("Redirecting...");
    setTimeout(() => {
        keycloak.accountManagement();
    }, 2000);
    }

    return (
        <div>
            {keycloak.authenticated && (
                <div>
                    <h1>Hey {keycloak.tokenParsed.preferred_username}</h1>
                    <Link to="/account/game"><button>Play</button></Link>
                    <button onClick={handleUpdate}>Manage acc</button>
                    <button onClick={handleLogout}>Logout</button>
                    <br></br>
                    <h1>{alert}</h1>
                </div>
            )}
            {keycloak.authenticated === false && (window.location.href = "/login")}
        </div>
    )
}
export default Account;