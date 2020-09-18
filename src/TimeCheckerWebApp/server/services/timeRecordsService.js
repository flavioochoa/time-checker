const { TimeRecordDAO } = require('../dao/timeRecordDAO');
const { parseResponse } = require('../helpers/common');

class TimeRecordsService {
    constructor() {
        this.timeRecordDAO = new TimeRecordDAO('records');
    }

    set(idUser, type) {
        let record = this.timeRecordDAO.save(idUser, type);
        return record;
    }

    async get(idUser, date) {
        let result = await this.timeRecordDAO.get(idUser, date);
        return parseResponse(result);
    }

    async getRange(idUser, startDate, endDate) {
        let list = {};
        for (let current = startDate; current.date() <= endDate.date(); current.add(1, 'day')) {
            let currentFormatted = current.format("YYYY-MM-DD");
            let result = await this.get(idUser, currentFormatted);
            list[currentFormatted] = result;
        }
        return list;
    }
}

module.exports = {
    timeRecordsService : new TimeRecordsService()
}