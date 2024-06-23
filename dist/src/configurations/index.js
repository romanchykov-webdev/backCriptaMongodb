"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process = require("node:process");
exports.default = () => ({
    port: process.env.PORT,
    mongodb_uri: process.env.MONGODB_URI,
    secret_jwt: process.env.SECRET,
    expire_jwt: process.env.EXPIRE_JWT
});
//# sourceMappingURL=index.js.map