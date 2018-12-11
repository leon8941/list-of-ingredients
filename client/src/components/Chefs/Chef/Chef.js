import React, {Component} from 'react';
import chefClass from './Chef.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

const style = {
    '@media (minWidth: 500px)' : {
        width: '450px'
    }
}

class Chef extends Component {
    constructor(props) {
        super(props);

        console.log('Chef.js inside constructor',props)
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

    render() {
        console.log('Chef.js inside render');
        return (
            <Aux>
                <p onClick={this.props.click}>I am {this.props.name}, and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        )
    }
}


export default withClass(Chef, chefClass.Chef);
