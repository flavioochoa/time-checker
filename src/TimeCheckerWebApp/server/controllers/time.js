var express = require('express');
var router = express.Router();
var timeRecordServiceClass = require('../services/timeRecordsService');
const { timeRecordsService } = timeRecordServiceClass;
var userActionsServiceClass = require('../services/userActionsService');
const { UserActionsService } = userActionsServiceClass;
var moment = require('moment');

router.get('/availableOptions/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let response = await timeRecordsService.get(id, moment().startOf('day').format('YYYY-MM-DD'));
        let userActionsService = new UserActionsService(response);
        let data = userActionsService.getTodayActions();
        return res.status(200).json({data});
    } catch (error) {
        return res.status(400).json({ status:'error', message:'availableOptions error!', messageDetail: error});
    }
});

router.post('/', async (req, res)=> {
    try {
        const { body } = req;
        let { id: userId, type } = body;
        let response = await timeRecordsService.set(userId, type);
        let { id } = response;
        const data = { id };
        res.status(200).json({data});
    } catch (error) {
        return res.status(400).json({ status:'error', message:'save time error', messageDetail: error});
    }
});

router.get('/weeklyReport/:id', async (req, res)=> {
    try {
        let { id } = req.params;
        var now = moment();
        var start = now.clone().weekday(0);
        var end = now.clone().weekday(6);
        let data = await timeRecordsService.getRange(id, start, end);
        return res.status(200).json({data});
    } catch (error) {
        res.status(400).json({status:'error', message: 'weekly report error', messageDetail: error });
    }
});


module.exports = router;