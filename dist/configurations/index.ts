import * as process from "node:process";

export default () => ({
  port: process.env.PORT,
  mongodb_uri: process.env.MONGODB_URI,
  secret_jwt: process.env.SECRET,
  expire_jwt: process.env.EXPIRE_JWT
});
