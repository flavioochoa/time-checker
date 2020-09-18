import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADMIN } from '../../helpers/constants';
import userActions from '../../actions/user';
import { genericSetToStateValue, isEmpty } from '../../helpers/common';
import LayoutBase from '../base/layoutBase';
import CustomInput from '../_generic/input';
import { message } from 'antd';
const { signIn } = userActions.actions;

class Access extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pin: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.register = this.register.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    render() {
        let { user, pin } = this.state;
        return (
            <LayoutBase>
                <div className="login">
                    <CustomInput 
                        label="User"
                        className="input"
                        value={user}
                        onChange={this.handleInputChange}
                        data-key="user"
                        placeholder="user"
                        onKeyUp={this.handleKeyUp}
                    />
                    <CustomInput 
                        label="Pin"
                        className="input"
                        value={pin}
                        onChange={this.handleInputChange}
                        data-key="pin"
                        placeholder="pin"
                        onKeyUp={this.handleKeyUp}
                    />
                    <div className="button-container">
                        <button onClick={this.signIn} style={{marginRight:'15px'}}>Sign Up</button>
                        <button onClick={this.register}>Admin</button>
                    </div>
                </div>
            </LayoutBase>
        );
    }

    handleInputChange(e) {
        genericSetToStateValue(e, this);
    }

    signIn() {
        let { user, pin } = this.state;
        let { history } = this.props;
        if(isEmpty(user) || isEmpty(pin)) {
            message.error('Check your information');
            return;
        }
        this.props.signIn(user, pin, history);
    }

    register() {
        this.props.history.push(ADMIN);
    }

    handleKeyUp(e) {
        var keyCode = event.which || event.keyCode;
        if(keyCode === 13) {
            this.signIn();
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn(user, pin, history) {
            dispatch(signIn(user, pin, history));
        },
    };
}

export default connect(null, mapDispatchToProps)(Access);