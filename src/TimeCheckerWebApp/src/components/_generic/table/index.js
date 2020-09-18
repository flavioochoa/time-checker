import React, { Component } from 'react';

class CustomTable extends Component {
    render() {
        const { config, data } = this.props;
        let dataKeys = this.getDataKeys();
        return(
            <table style={{width:'100%'}}>
                <thead>
                    <tr>
                    {
                        config.map(item => {
                            return (
                                <th key={item.title}>{item.title}</th>
                            )
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((item, index) => {
                        let keys = Object.keys(dataKeys);
                        return (
                            <tr key={index}>
                            {
                                keys.map((key, i) => {
                                    return (
                                        <td key={`key${index}${i}${key}`}>
                                            { dataKeys[key](item, key) }
                                        </td>
                                    );
                                    
                                }) 
                            }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }

    getDataKeys() {
        let result = {};
        this.props.config.forEach(item =>  {
            result[item.key] = item.render ? item.render : (item, key) => item[key];
        });
        return result;
    }
}

export default CustomTable;