import getEnvConfigs from "./src/utils/getEnvConfigs.ts";
import { StatusCode } from "./src/constants/statuscode.ts";
console.log(StatusCode)
const { env } = getEnvConfigs()
console.log(env) 