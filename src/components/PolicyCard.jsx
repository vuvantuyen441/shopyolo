import React from 'react';

const PolicyCard = (props) => {
    return (
        <div className='policycard'>
            <div className="policycard__icon">
                <i className={props.icon}></i>
            </div>
            <div className="policycard__info">
                <div className="policycard__info__name">
                    {props.name}
                </div>
                <div className="policycard__info__description">
                    {props.description}
                </div>
            </div>          
        </div>
    );
};

export default PolicyCard;