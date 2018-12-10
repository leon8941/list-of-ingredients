import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClass = [];
    let buttonClass = "";

    if(props.showChefs){
        buttonClass = classes.Red;
    }

    if(props.chefs.length <= 1){
        assignedClass.push(classes.bold);
    }
    
    if(props.chefs.length <= 2){
        assignedClass.push(classes.red);
    }

    return(
        <div className={classes.Cockpit}>
            <p className={assignedClass.join('')}>This is crazy!</p>
            <button className={buttonClass} onClick={props.clicked}>Toggle Visibility</button>
        </div>
    )
}

export default cockpit;