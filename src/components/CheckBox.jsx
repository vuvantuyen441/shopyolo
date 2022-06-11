import React from 'react';

const CheckBox = (props) => {

    return (
        <label className='checkbox'>
            <input type='checkbox' onChange={props.onChange} checked={props.checked}/>
            <span>
                {props.label}
            </span>
        </label>
    );
};

export default CheckBox;