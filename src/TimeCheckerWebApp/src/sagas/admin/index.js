import { call, takeEvery, put } from 'redux-saga/effects';
import { message } from 'antd';
import { getUsersRequest, newUserRequest } from '../../api/users';
import userActionsInfo from '../../actions/user';
const { types, actions } = userActionsInfo;
const { setUsers } = actions;

export function* getUsers() {
    try {
        const response = yield call(getUsersRequest);
        yield put(setUsers(response.data));        
    } catch (error) {
        message.error(error.message, 5);
    }
}

export function* register(data) {
    try {
        const { user, pin, name, expectedWorkHours } = data;
        yield call(newUserRequest, { user, pin, name, expectedWorkHours });
        message.success('User successfully added', 5);
        yield call(getUsers);
    } catch (error) {
        message.error(error.message, 5);
    }
}

export function* adminSaga() {
    yield takeEvery(types.GET_USERS, getUsers);
    yield takeEvery(types.REGISTER_NEW_USER, register);
}