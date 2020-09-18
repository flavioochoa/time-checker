import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends Component {
    render() {
        const { component: Component, userInfo, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={props => {
                    if (userInfo) {
                        return <Component {...props} />;
                    } else {
                        return <Redirect to="/" />
                    }
                }}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.user.userInfo
    };
}

export default connect(mapStateToProps, null)(ProtectedRoute);