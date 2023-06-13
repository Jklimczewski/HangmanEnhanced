import Login from "./account/login";
import Register from "./account/register";
import Game from "./game/game";
import Account from "./account/account"
import Update from "./account/update"
import Data from "./account/data"
import NotFound from "./notFound"
import Words from "./words"
import { Route, Routes } from "react-router";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";

function App() {  
  return (
  <>
    <ReactKeycloakProvider authClient={keycloak} initOptions={{pkceMethod: "S256"}}>
      <Routes>
        <Route path="/words" element={<Words/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/account/game" element={<Game/>} />
        <Route path="/account/update" element={<Update/>} />
        <Route path="/account/update/data" element={<Data/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </ReactKeycloakProvider>
  </>
  );
}

export default App;
