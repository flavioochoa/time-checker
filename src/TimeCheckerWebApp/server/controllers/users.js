var express = require('express');
var router = express.Router();
var userServiceClass = require('../services/userService');
const { userService } = userServiceClass;

router.get('/', async (req, res)=> {
    try {
        let data = await userService.get();
        return res.status(200).json({data});
    } catch (error) {
        res.status(400).json({status:'error', message: 'users get error', messageDetail: error });
    }
});

router.post('/', async (req, res)=> {
    try {
        const { body } = req;
        let response = await userService.set(body);
        let { id } = response;
        const data = { id };
        res.status(200).json({data});
    } catch (error) {
        res.status(400).json({status:'error', message: 'user save error', messageDetail: error });
    }
});

module.exports = router;