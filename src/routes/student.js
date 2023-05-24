import express from 'express';
 import { checkCrad } from '../middleware/authrization.js';
import { createStudent, updateStudent } from '../controller/Student.js';



 const router = express.Router();
// //test api
router.get('/test', function (req, res) {
    res.send('hello world')
})
 router.post("/create", checkCrad,createStudent )
 router.post('/students/:rollnumber', checkCrad, updateStudent)

export default router;