import dotenv from "dotenv";
//This gives access to environment variables
dotenv.config({ path: "./config.env" });

import dbConnect from "./db/connect";
//Start connection with database
dbConnect();

import app from "./app";

const port: number = parseInt(process.env.PORT || "3000");

app.listen(port, () => {
  console.log(`🤖 Listening on port ${port}`);
});
