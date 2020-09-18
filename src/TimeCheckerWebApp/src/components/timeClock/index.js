import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import timeClockInfo from '../../actions/timeClock';
import TimeClockComponents from './timeClockComponents';
import Base from '../base';
const { actions } = timeClockInfo;
const { getAvailableOptions, setEntryTime, setLunchTime, setLunchTimeReturn, setLeaveTime } = actions;

class TimeClock extends Component {
    componentDidMount() {
        this.props.getAvailableOptions(this.props.userInfo.id);
    }

    render() {
        return(
            <Base>
                <div className="card-container">
                    <TimeClockComponents 
                        {...this.props}
                    />
                </div>
            </Base>
        );
    }
}

const mapStateToProps = state => {
    return {
        availableOptions: state.timeClock.availableOptions,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAvailableOptions(id) {
            dispatch(getAvailableOptions(id));
        },
        setEntryTime(id) {
            dispatch(setEntryTime(id));
        },
        setLunchTime(id) {
            dispatch(setLunchTime(id));
        },
        setLunchTimeReturn(id) {
            dispatch(setLunchTimeReturn(id));
        },
        setLeaveTime(id) {
            dispatch(setLeaveTime(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeClock);