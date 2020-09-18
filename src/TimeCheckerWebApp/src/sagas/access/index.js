import { call, takeEvery, put } from 'redux-saga/effects';
import { message } from 'antd';
import userActionsInfo from '../../actions/user';
const { types, actions } = userActionsInfo;
const { setCurrentUser } = actions;
import { signInRequest } from '../../api/access';
import { TIME_CLOCK } from '../../helpers/constants';

export function* signIn(data) {
    try {
        const { history, user, pin } = data;
        const response = yield call(signInRequest, { user, pin });
        if(!response.data) {
            throw { message: 'Check your information!' };
        }
        let { id, name, user: userResponse } = response.data;
        yield put(setCurrentUser(id, name, userResponse));
        history.push(TIME_CLOCK);
    } catch (error) {
        message.error(error.message, 5);
    }
}

export function* accessSaga() {
    yield takeEvery(types.SIGN_IN, signIn);
}