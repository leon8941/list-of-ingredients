import React, {Component} from 'react';
import chefClass from './Chef.css';

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
            <div className={chefClass.Chef} style={style}>
                <p onClick={this.props.click}>I am {this.props.name}, and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}


export default Chef;
