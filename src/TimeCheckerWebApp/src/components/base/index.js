import { Layout } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const { Header, Footer, Content } = Layout;

class Base extends Component {
    render() {
        return (
            <Layout style={{height: '100vh'}}>
                <Header style={{color:'white'}}>Welcome {this.props.userInfo.name}!!</Header>
                <Content style={{ padding: '0 50px', height:'100vh' }}>
                    <div className="site-layout-content">
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Flavio Ochoa ©2020</Footer>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.user.userInfo,
    }
}

export default connect(mapStateToProps, null)(Base);