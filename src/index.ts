import express from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use((err, req, res, next) => {
  const { name, message, stack } = err
  if(name == 'validationError') res.status(400).json({error: message})
  else if(name == 'resourceError') res.status(403).json({error: message})
  else if(name == 'notFoundError') res.status(404).json({error: message})
  else {
    console.log(message)
    res.status(500).json({name, message, stack})
  }
  next(err)
})

export { app };
