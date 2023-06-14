const NodeAdapter = require("keycloak-connect");

const config = {
  realm: "project",
  "auth-server-url": process.env.KEYCLOAK_URL,
  "ssl-required": "external",
  resource: "HangmanServer",
  "verify-token-audience": true,
  "credentials": {
    "secret": process.env.SECRET
  },
  "use-resource-role-mappings": true,
  "bearer-only": true,
};

const keycloak = new NodeAdapter({}, config);

module.exports = keycloak;