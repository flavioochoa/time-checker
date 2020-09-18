import { Layout } from 'antd';
import React, { Component } from 'react';
const { Content } = Layout;

class LayoutBase extends Component {
    render() {
        return (
            <Layout style={{height: '100vh'}}>
                <Content style={{ padding: '0 50px', height:'100vh' }}>
                    {this.props.children}
                </Content>
            </Layout>
        );
    }
}

export default LayoutBase;