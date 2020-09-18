import React, { Component } from 'react';
import { connect } from 'react-redux';
import userActions from '../../actions/user';
import { genericSetToStateValue, isEmpty } from '../../helpers/common';
import CustomInput from '../_generic/input';
import { message } from 'antd';
const { registerNewUser } = userActions.actions;

class NewUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = { user: '', pin:'', name: '', expectedWorkHours: '' };
        this.addNewEmployee = this.addNewEmployee.bind(this);
        this.close = this.close.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        let { visible } = this.props;
        if(!visible) {
            return null;
        }
        let { user, pin, name, expectedWorkHours } = this.state;
        return(
            <div style={{display:'flex', flexDirection:'column', alignItems: 'flex-end', }}>
                <div className="new-user-form">
                    <div>
                        <CustomInput 
                            label="User"
                            className="input"
                            value={user}
                            onChange={this.handleInputChange}
                            data-key="user"
                            placeholder="user"
                        />
                    </div>
                    <div>
                        <CustomInput 
                            label="Pin"
                            className="input"
                            value={pin}
                            onChange={this.handleInputChange}
                            data-key="pin"
                            placeholder="pin"
                        />
                    </div>
                    <div>
                        <CustomInput 
                            label="Name"
                            className="input"
                            value={name}
                            onChange={this.handleInputChange}
                            data-key="name"
                            placeholder="name"
                        />
                    </div>
                    <div>
                        <CustomInput 
                            label="Expected working hours"
                            className="input"
                            value={expectedWorkHours}
                            onChange={this.handleInputChange}
                            data-key="expectedWorkHours"
                            placeholder="expectedWorkHours"
                        />
                    </div>
                </div>
                <div>
                    <button style={{marginRight:'15px'}} onClick={this.addNewEmployee}>Add</button>
                    <button onClick={this.close}>Cancel</button>
                </div>
            </div>
            
        );
    }

    handleInputChange(e) {
        genericSetToStateValue(e, this);
    }

    addNewEmployee() {
        let { user, pin, name, expectedWorkHours } = this.state;
        if(isEmpty(user) || isEmpty(pin) || isEmpty(name) || (isEmpty(expectedWorkHours) || expectedWorkHours <= 0)) {
            message.error('All fields are required', 5);
            return;
        }
        this.props.registerNewUser(user, pin, name, expectedWorkHours);
        this.close();
    }

    close() {
        this.props.onClose();
        this.setState({ user: '', pin:'', name: '', expectedWorkHours: '' });
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerNewUser(user, pin, name, expectedWorkHours) {
            dispatch(registerNewUser(user, pin, name, expectedWorkHours));
        }
    };
};

export default connect(null, mapDispatchToProps)(NewUserForm);