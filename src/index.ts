// import { env } from "@/common/utils/envConfig";
// import { app, logger } from "@/server";

// const server = app.listen(env.PORT, () => {
//   const { NODE_ENV, HOST, PORT } = env;
//   logger.info(`Server (${NODE_ENV}) running on port http://${HOST}:${PORT}`);
// });

// const onCloseSignal = () => {
//   logger.info("sigint received, shutting down");
//   server.close(() => {
//     logger.info("server closed");
//     process.exit();
//   });
//   setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
// };

// process.on("SIGINT", onCloseSignal);
// process.on("SIGTERM", onCloseSignal);

import { env } from "@/common/utils/envConfig";
import { handler } from "@/lambda";

// You can still use the logger if needed for other purposes
import { pino } from "pino";
const logger = pino({ name: "lambda start" });

logger.info(`Lambda function initialized in ${env.NODE_ENV} mode`);

export { handler };