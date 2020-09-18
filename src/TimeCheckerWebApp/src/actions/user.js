const SIGN_IN = 'SIGN_IN';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const REGISTER_NEW_USER = 'REGISTER_NEW_USER';
const GET_USERS = 'GET_USERS';
const SET_USERS = 'SET_USERS';
const GET_WEEKLY_REPORT = 'GET_WEEKLY_REPORT';
const SET_WEEKLY_REPORT = 'SET_WEEKLY_REPORT';

const signIn = (user, pin, history) => {
    return {
        type: SIGN_IN,
        user,
        pin,
        history,
    };
};

const setCurrentUser = (id, user, name) => {
    return {
        type: SET_CURRENT_USER,
        id,
        user,
        name,
    };
};

const registerNewUser = (user, pin, name, expectedWorkHours) => {
    return {
        type: REGISTER_NEW_USER,
        user, 
        pin, 
        name, 
        expectedWorkHours,
    };
};

const getUsers = () => {
    return {
        type: GET_USERS,
    };
};

const setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    };
};

const getWeeklyReport = (id) => {
    return {
        type: GET_WEEKLY_REPORT,
        id
    };
};

const setWeeklyReport = (id, workedHours) => {
    return {
        type: SET_WEEKLY_REPORT,
        id,
        workedHours,
    };
};

export default {
    types: {
        SIGN_IN,
        SET_CURRENT_USER,
        REGISTER_NEW_USER,
        GET_USERS,
        SET_USERS,
        GET_WEEKLY_REPORT,
        SET_WEEKLY_REPORT,
    },
    actions: {
        signIn,
        setCurrentUser,
        registerNewUser,
        getUsers,
        setUsers,
        getWeeklyReport,
        setWeeklyReport,
    }
};