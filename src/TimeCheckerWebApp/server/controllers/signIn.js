var express = require('express');
var router = express.Router();
var userServiceClass = require('../services/userService');
const { userService } = userServiceClass;

router.post('/', async (req, res)=> {
    try {
        const { body } = req;
        const data = await userService.getByUserPin(body.user, body.pin);
        res.status(200).json({data});
    } catch (error) {
        return res.status(400).json({ status:'error', message:'sign-in error', messageDetail: error});
    }
});

module.exports = router;