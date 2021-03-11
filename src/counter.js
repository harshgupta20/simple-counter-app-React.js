import React from 'react';

import './style/counter.css';

const Counter = (props) => {

    let a = {
        color: props.TextColor
    };
    return(
        <>
            <div className='box'>
                <button className='add' onClick={props.OnClickAdd}><img src="up.png"/></button>
                <button style={a} className='notbtn'>{props.numUpdate}</button>
                <button className='minus' onClick={props.OnClickMinus}><img src="down.png"/></button>
            </div>
        </>
    )


}

export default Counter;