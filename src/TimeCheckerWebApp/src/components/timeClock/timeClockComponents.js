import React, { Component, Fragment } from 'react';
import timeClockInfo from '../../actions/timeClock';
import TimeClockAction from './timeClockAction';
const { types } = timeClockInfo;
const { SET_ENTRY_TIME, SET_LUNCH_TIME, SET_LUNCH_RETURN_TIME, SET_LEAVE_TIME } = types;

class TimeClockComponents extends Component {

    render() {
        let components = this.getComponents(this.props);
        let { availableOptions } = this.props;
        let result = availableOptions.map( key => {
            let component = components[key];
            return component ? component : <Fragment> {key} not defined</Fragment>;
        });
        return result.length ? result : <h1>You cannot perform actions for today!!</h1>;
    }

    getComponents() {
        const { setEntryTime, setLunchTime, setLunchTimeReturn, setLeaveTime, userInfo } = this.props;
        const { id } = userInfo;
        return {
            [SET_ENTRY_TIME]: <TimeClockAction key={SET_ENTRY_TIME} title={'Check entry time'} onClick={setEntryTime} id={id} />,
            [SET_LUNCH_TIME]: <TimeClockAction key={SET_LUNCH_TIME} title={'Check lunch time'} onClick={setLunchTime} id={id} />,
            [SET_LUNCH_RETURN_TIME]: <TimeClockAction key={SET_LUNCH_RETURN_TIME} title={'Check lunch return time'} onClick={setLunchTimeReturn} id={id} />,
            [SET_LEAVE_TIME]: <TimeClockAction key={SET_LEAVE_TIME} title={'Check leave time'} onClick={setLeaveTime} id={id} />,
        }
    }
}

export default TimeClockComponents;