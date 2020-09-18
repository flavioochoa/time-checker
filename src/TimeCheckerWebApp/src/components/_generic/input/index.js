import React, { Fragment } from 'react';

const CustomInput = (props) => {
    const { label, ...rest } = props;
    return (
        <Fragment>
            <label className="block">{label}</label>
            <input
                {...rest}
            />
        </Fragment>
    );
}

export default CustomInput;