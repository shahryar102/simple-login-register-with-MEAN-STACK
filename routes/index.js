import express from 'express';
const router = express.Router();
import userController from '../controller/userController';

router.post('/api/login',
    userController.login);
// router.get('/api/login', bookController.bookdata);

router.post('/api/register',
    userController.register
 );


module.exports = router;