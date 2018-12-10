import React, {Component} from 'react';
import Chef from './Chef/Chef'

class Chefs extends Component {
    constructor(props) {
        super(props);

        console.log('Chefs.js inside constructor',props)
    }
    
    componentWillMount = () => {
        console.log('Chefs.js inside componentWillMount')
    }
    
    componentDidMount = () => {
        console.log('Chefs.js inside componentDidMount')
    }
    
    render () {
        console.log('Chefs.js inside render');

        return this.props.chefs.map((chef, index) => {
            return <Chef 
                click = { () => this.props.clicked(index) }
                key = {chef.id}
                name = {chef.name}
                age = {chef.age}
                changed = { (event) => this.props.changed(event, chef.id) }
                />
        })
    }
}
 
export default Chefs;