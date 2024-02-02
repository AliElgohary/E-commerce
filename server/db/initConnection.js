import mongoose from "mongoose";

const initialConnections = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(console.log("database connection established"))
    .catch((err) => console.log("error connecting to database" + err));
};

export default initialConnections;
