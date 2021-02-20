require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "routes";
import notFoundMiddleware from "middlewares/notFound";
import errorHandlerMiddleware from "middlewares/errorHandler";

// Root app
const app = express();

// Register middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Application router
app.use(router);

// Error & 404 middlewares
app.use(errorHandlerMiddleware());
app.use(notFoundMiddleware());

// Start listening
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`);
});
