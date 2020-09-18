const SET_ENTRY_TIME = 'SET_ENTRY_TIME';
const SET_LUNCH_TIME = 'SET_LUNCH_TIME';
const SET_LUNCH_RETURN_TIME = 'SET_LUNCH_RETURN_TIME';
const SET_LEAVE_TIME = 'SET_LEAVE_TIME';
const GET_AVAILABLE_OPTIONS = 'GET_AVAILABLE_OPTIONS';
const SET_AVAILABLE_OPTIONS = 'SET_AVAILABLE_OPTIONS';

const _setTimeActionCreator = (type, id) => { return { type, id } };

const setEntryTime = id =>  {
    return _setTimeActionCreator(SET_ENTRY_TIME, id);
};

const setLunchTime = id =>  {
    return _setTimeActionCreator(SET_LUNCH_TIME, id);
};

const setLunchTimeReturn = id =>  {
    return _setTimeActionCreator(SET_LUNCH_RETURN_TIME, id);
};

const setLeaveTime = id =>  {
    return _setTimeActionCreator(SET_LEAVE_TIME, id);
};

const getAvailableOptions = (id) => {
    return {
        type: GET_AVAILABLE_OPTIONS,
        id,
    };
};

const setAvailableOptions = (availableOptions) => {
    return {
        type: SET_AVAILABLE_OPTIONS,
        availableOptions,
    };
};

export default {
    types: {
        SET_ENTRY_TIME,
        SET_LUNCH_TIME,
        SET_LUNCH_RETURN_TIME,
        SET_LEAVE_TIME,
        GET_AVAILABLE_OPTIONS,
        SET_AVAILABLE_OPTIONS,
    },
    actions: {
        setEntryTime,
        setLunchTime,
        setLunchTimeReturn,
        setLeaveTime,
        getAvailableOptions,
        setAvailableOptions,
    }
};