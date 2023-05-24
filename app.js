import express from "express";
import userRouter from './src/routes/user.js'
import postRouter from './src/routes/post.js'
import studentRouter from './src/routes/student.js'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//routing middleware -- mounting-

app.use('/api/users', userRouter)
app.use("/api/posts", postRouter)

// mounting for students--
app.use('/api/student',studentRouter)
export default app;