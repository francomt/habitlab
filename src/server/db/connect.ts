import mongoose from "mongoose";

const db: string = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

async function connect(): Promise<void> {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("DB connected successfully!");
  } catch (error) {
    console.error(error);
  }
}

export default connect;
