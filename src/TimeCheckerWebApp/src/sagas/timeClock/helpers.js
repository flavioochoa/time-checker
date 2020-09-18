import moment from 'moment';
import timeClockActionsInfo from '../../actions/timeClock';
const { SET_ENTRY_TIME, SET_LUNCH_TIME, SET_LUNCH_RETURN_TIME, SET_LEAVE_TIME } = timeClockActionsInfo.types;

export const getWorkedHours = (weeklyReport) => {
    let workedMinutes = 0;
    let lunchMinutes = 0;

    Object.keys(weeklyReport).forEach(key => {
        let report = weeklyReport[key];
        let hoursDetail = getHoursDetail(report);
        let { entry, leave, lunch, endLunch } = hoursDetail;
        if (entry !== null && leave !== null && lunch !== null && endLunch !== null) {
            let workDuration = moment(leave).diff(moment(entry), 'minutes');
            let lunchDuration = moment(endLunch).diff(moment(lunch), 'minutes');
            workedMinutes += workDuration;
            lunchMinutes += lunchDuration;
        }
    });

    return { workedHours: getHoursFromMinute(workedMinutes), lunchHours: getHoursFromMinute(lunchMinutes) };

}

export const getHoursFromMinute = (minutes) => { return { hours: (minutes / 60).toFixed(2) } };
export const getDefaultContainer = () => { return { entry: null, leave: null, lunch: null, endLunch: null }; };

export const getHoursDetail = report => {
    let data = getDefaultContainer();
    report.forEach(item => {
        switch (item.type) {
            case SET_ENTRY_TIME:
                data.entry = item.timespan;
                break;
            case SET_LUNCH_TIME:
                data.lunch = item.timespan;
                break;
            case SET_LUNCH_RETURN_TIME:
                data.endLunch = item.timespan;
                break;
            case SET_LEAVE_TIME:
                data.leave = item.timespan;
                break;
        }
    });
    return data;
}

export const getNextOption = (result) => {
    if(result.length > 3) {
        return null;
    }
    let items = [SET_ENTRY_TIME, SET_LUNCH_TIME, SET_LUNCH_RETURN_TIME, SET_LEAVE_TIME];
    return items[result.length];
}