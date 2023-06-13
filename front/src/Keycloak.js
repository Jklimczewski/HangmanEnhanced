import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "http://localhost:8080",
 realm: "project",
 clientId: "myappclient",
 pkceMethod: "S256",
});


export default keycloak;