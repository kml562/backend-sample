import express from "express";

// import { createPost } from "../controller/Post.js";
// import { checkCrad } from "../middleware/authrization.js";
const router = express.Router();

//test router
router.get('/test', function (req, res) { 
    res.send({ message:"test api"})
})

//create a post request---
// router.post('/createpost',checkCrad, createPost  )
// router.post('/students/:rollnumber', checkCrad, upda)

export default router;