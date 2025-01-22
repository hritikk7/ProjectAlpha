import app from "./src/app";
import {connectDb} from "./src/config/mongoose"


connectDb()
// Environment variables
const PORT = process.env.PORT || 5000;

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Listening on Port: ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();

export default app;