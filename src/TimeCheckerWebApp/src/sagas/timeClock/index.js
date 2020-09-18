import { call, takeEvery, put, delay } from 'redux-saga/effects';
import { message } from 'antd';
import { setTimeRequest, getAvailableOptionsRequest, getWeeklyReportRequest } from '../../api/timeClock';
import timeClockActionsInfo from '../../actions/timeClock';
const { types, actions } = timeClockActionsInfo;
const { setAvailableOptions } = actions;
import user from '../../actions/user';
import { getWorkedHours, getNextOption } from './helpers';
const { types: userTypes, actions: userActions } = user;
const { setWeeklyReport } = userActions;
const { SET_ENTRY_TIME, SET_LUNCH_TIME, SET_LUNCH_RETURN_TIME, SET_LEAVE_TIME, GET_AVAILABLE_OPTIONS } = types;
const allActions = [SET_ENTRY_TIME, SET_LUNCH_TIME, SET_LUNCH_RETURN_TIME, SET_LEAVE_TIME];

export function* setTime(data) {
    try {
        const { type, id } = data;
        yield call(setTimeRequest, type, id);
        message.success('Successfully saved, you are about to automatically log out!', 5);
        yield delay(3000);
        window.location.href = '/';
    } catch (error) {
        message.error(error.message, 5);
    }
}

export function* getAvailableOptions(data) {
    try {
        const { id } = data;
        const response = yield call(getAvailableOptionsRequest, id);
        let result = response.data.map(item => item.registryType);
        let availableOptions = [];
        let nextOption = getNextOption(result);
        if(nextOption != null) {
            availableOptions.push(nextOption);
        }
        yield put(setAvailableOptions(availableOptions));
        
    } catch (error) {
        message.error(error.message, 5);
    }
}

export function* getWeeklyReport(data) {
    try {
        const { id } = data;
        const response = yield call(getWeeklyReportRequest, id);
        const workedHours = getWorkedHours(response.data);
        yield put(setWeeklyReport(id, workedHours));
    } catch (error) {
        message.error(error.message, 5);
    }
}

export function* timeClockSaga() {
    yield takeEvery(allActions, setTime);
    yield takeEvery(GET_AVAILABLE_OPTIONS, getAvailableOptions);
    yield takeEvery(userTypes.GET_WEEKLY_REPORT, getWeeklyReport);
}