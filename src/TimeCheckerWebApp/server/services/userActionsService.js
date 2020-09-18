var moment = require('moment');

class UserActionsService {
    constructor(actions) {
        this.actions = actions;
    }

    getActionsBetweenDates(startDate, endDate) {
        let result = this.actions.filter(item => item.timespan >= startDate && item.timespan <= endDate);
        return result;
    }

    getTodayActions() {
        let now = moment();
        let start = now.startOf('day').valueOf();
        let end = now.endOf('day').valueOf();
        let todayActions = this.getActionsBetweenDates(start, end);
        let result = todayActions.map(item => { return {registryType: item.type }});
        return result;
    }
}

module.exports = {
    UserActionsService
}