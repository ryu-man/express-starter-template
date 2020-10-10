"use strict";
import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import { createServer } from 'http'

const server = express();
const http = createServer(server);

const config = require("./config");
const { port, dbUrl } = config


server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, "public")));

// Creating an http server listening to a given port
http.listen(port, () => {
  // Connecting to mongodb using mongoose
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  mongoose.connection.once("open", () => {
    // connected succesfully to DB
  });

  // seting up routes
  import { root } from './routes'
  root(server)
});
