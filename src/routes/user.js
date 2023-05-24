import express from 'express';
import { checkCrad } from '../middleware/authrization.js';
import { createUser, getUser } from '../controller/User.js'

const router = express.Router();

router.get('/test', function (req, res) {
    res.send('hello world')
})

router.post('/createuser', checkCrad , createUser  )
router.get('/getusers', checkCrad ,getUser )

export default router;