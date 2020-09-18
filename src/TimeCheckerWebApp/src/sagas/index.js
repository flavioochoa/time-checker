import { all } from 'redux-saga/effects';
import { accessSaga } from './access';
import { adminSaga } from './admin';
import { timeClockSaga } from './timeClock'

export default function* rootSaga() {
	yield all([
		accessSaga(),
		adminSaga(),
		timeClockSaga(),
	]);
};