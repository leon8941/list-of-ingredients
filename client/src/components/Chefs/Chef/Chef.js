import React, {Component} from 'react';
import chefClass from './Chef.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import {AuthContext} from '../../Home/Home';

const style = {
    '@media (minWidth: 500px)' : {
        width: '450px'
    }
}

class Chef extends Component {
    constructor(props) {
        super(props);

        console.log('Chef.js inside constructor',props)

        this.inputElement = React.createRef();
    }
    
    componentWillMount = () => {
        console.log('Chef.js inside componentWillMount')
    }
    
    componentDidMount = () => {
        console.log('Chef.js inside componentDidMount')
        
    }

    componentWillUnmount = () => {
        console.log('Chef.js inside componentWillUnmount')
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        console.log('Chef.js inside render');
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth? <p> Authenticated </p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I am {this.props.name}, and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
        )
    }
}

Chef.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Chef, chefClass.Chef);
