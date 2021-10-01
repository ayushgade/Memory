import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js'

const app = express();


app.use(bodyparser.json({ limit: '30mb', extended: true }))
app.use(bodyparser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://ayush-gade:Ayush123@cluster0.eziot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT|| 3001;

mongoose.connect(CONNECTION_URL, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`)); // .catch method returns a Promise.

// mongoose.set('useFindAndModify', false);