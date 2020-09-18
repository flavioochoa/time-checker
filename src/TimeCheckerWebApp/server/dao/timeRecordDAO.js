var moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const { BaseDAO } = require('./baseDAO');

class TimeRecordDAO extends BaseDAO {
    constructor(path) {
        super(path);
    }

    save(idUser, type) {
        const record = { 
            id: uuidv4(),
            timespan: new Date().getTime(), 
            type,
        }
        const today = moment().format('YYYY-MM-DD');
        this.db.ref.child(`${this.path}/${idUser}/${today}`).push(record);
        return record;
    }

    async get(idUser, date) {
        let result = await this._get(`${this.path}/${idUser}/${date}`);
        return result;
    }
}

module.exports = {
    TimeRecordDAO
}