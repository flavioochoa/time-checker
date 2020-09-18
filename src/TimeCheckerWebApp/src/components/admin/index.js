import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import userActions from '../../actions/user';
import NewUserForm from './newUserForm';
import CustomTable from '../_generic/table';
import LayoutBase from '../base/layoutBase';
const { getUsers, getWeeklyReport } = userActions.actions;

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
        let reference = this.showUserModal;
        this.showUserModal = reference.bind(this, true);
        this.hideUserModal = reference.bind(this, false);
        this.getWeeklyReport = this.getWeeklyReport.bind(this);
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        let { users } = this.props;
        return(
            <LayoutBase>
                <div className="admin-container">
                    <div className="flex-between">
                        <h3>Employees</h3>
                        <button onClick={this.showUserModal}>Add new employee</button>
                    </div>
                    
                    <NewUserForm
                        visible = { this.state.visible }
                        onClose = { this.hideUserModal }
                    />
                    <div className="line"></div>
                    <div className="custom-table">
                        <CustomTable 
                            config = { this.getConfig()}
                            data = { users }
                        />
                    </div>
                </div>
            </LayoutBase>
        );
    }

    showUserModal(visible) {
        this.setState({ visible });
    }

    getWeeklyReport(id) {
        this.props.getWeeklyReport(id);
    }

    getConfig() {
        let config = [
            {
                title: 'Id',
                key: 'id',
            },
            {
                title: 'Name',
                key: 'name',
            },
            {
                title: 'User',
                key: 'user',
            },
            {
                title: 'expected hours',
                key: 'expectedWorkHours',
            },
            {
                title: 'worked hours',
                key: 'workedHours',
                render: (row, key) => {
                    if(!row.workedHours) {
                        return (
                            <Fragment>
                                <button onClick={() => this.getWeeklyReport(row.id)}>Weekly report</button>
                            </Fragment>
                        );
                    } else {
                        let { workedHours, lunchHours } = row.workedHours;
                        let result = (row.expectedWorkHours - workedHours.hours);
                        let fixedResult = result.toFixed(2);
                        let message = result < 0 ? `above: ${Math.abs(fixedResult)}` : `below : ${fixedResult}`;
                        return(
                            <Fragment>
                                <div>Worked hours: {workedHours.hours}</div>
                                <div>Lunch hours: {lunchHours.hours}</div>
                                <div>{message}</div>
                            </Fragment>
                        );
                    }
                    
                }
            }      
        ];
        return config;
    }
}

const mapStateToProps = state => {
    return {
        users: state.admin.users,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getUsers() {
            dispatch(getUsers());
        },
        getWeeklyReport(id) {
            dispatch(getWeeklyReport(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);