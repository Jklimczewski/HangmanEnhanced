const NodeAdapter = require("keycloak-connect");

const config = {
  "confidential-port": 8843,
  realm: "project",
  "auth-server-url": process.env.KEYCLOAK_URL,
  "ssl-required": "external",
  resource: "HangmanServer",
  "realmPublicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxXM9igwr1eNElMjJN2v2yx4Ba70AQjNznoPbkVOBRslBKz6mibMhuAKzcK/wUmbjk6/MAwcLhpMtxuynbRDldYZGMn1cJy00xwAKWM+D+N0QD7pmIOseJHOq5IR8gG6Qc1yHKLcsuPKokluOzzYkEIzgsxc7o7xaRIF7Hm5o1mRzZx5odZlXB+plblvSZq2PsqTT5kx14SqQb++J6uc0jyBAH8/qd9SACIf/rXH1X2iK5dLf9F7lL33FPhlCq4q7fAcVLGjp5aqz8PMOp32DqRsc9lzbvacxZ9yQlrFE9GzGGfaJ2fnOmNSyU4bs8AJE4bxi4tuwZoWSY8f87mWWiwIDAQAB",
  "bearer-only": true,
};

const keycloak = new NodeAdapter({}, config);

module.exports = keycloak;