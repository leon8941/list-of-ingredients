import React from 'react';
import Chef from './Chef/Chef'

const chefs = (props) => props.chefs.map((chef, index) => {
        return (
            <Chef 
            click = { () => props.clicked(index) }
            key = {chef.id}
            name = {chef.name}
            age = {chef.age}
            changed = { (event) => props.changed(event, chef.id) }
            />
        )
    })


export default chefs;