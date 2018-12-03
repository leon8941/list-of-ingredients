import React, {Component} from 'react';
import './Chef.css';

const chef = (props) => {
    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    }
    return (
        <div className="Chef" style={style}>
            <p onClick={props.click}>I am {props.name}, and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default chef;
