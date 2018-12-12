import React, {Component} from 'react';
import Chef from './Chef/Chef'

class Chefs extends Component {
    constructor(props) {
        super(props);

        console.log('Chefs.js inside constructor',props);
        this.lastChefRef = React.createRef();
    }
    
    componentWillMount = () => {
        console.log('Chefs.js inside componentWillMount')
    }
    
    componentDidMount = () => {
        console.log('Chefs.js inside componentDidMount');

        this.lastChefRef.current.focus();
    }

    componentWillUnmount = () => {
        console.log('Chefs.js inside componentWillUnmount')
    }

    componentWillReceiveProps = (nextProps) => {
        console.log('Chefs.js inside componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log('Chefs.js inside shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate = (nextProps, nextState) => {
        console.log('Chefs.js inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate = () => {
        console.log('Chefs.js inside componentDidUpdate');
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
                position = {index}
                ref = {this.lastChefRef}
                />
        })
    }
}
 
export default Chefs;