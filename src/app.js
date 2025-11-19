import userRoute from "./routes/user.route.js";

const rootApp = (app) => {
  app.use("/api/users", userRoute);
};

export default rootApp;
