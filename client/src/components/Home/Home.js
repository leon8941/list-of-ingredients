import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import appClasses from '../../containers/App.css';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react';
import Chefs from '../Chefs/Chefs';
import Cockpit from '../Cockpit/Cockpit';

class Home extends Component {
  constructor(props) {
    super(props);

    console.log('Home.js inside constructor',props)
  }

  componentWillMount = () => {
    console.log('Home.js inside componentWillMount')
  }
  
  componentDidMount = () => {
    console.log('Home.js inside componentDidMount')
  }

  state = {
    chefs: [
      {id: 1, name: "Chef Mike", age: 28},
      {id: 2, name: "Chef Leon", age: 38},
      {id: 3, name: "Chef Micah", age: 31},
      {id: 4, name: "Chef Arthur", age: 26}
    ],
    showChefs: false
  }

  toggleVisibility = () => {
    const doesShow = this.state.showChefs;
    this.setState(
      {
        showChefs: !doesShow
      }
    );
  }

  deleteChefHandler = (index) => {
    const chefs = [...this.state.chefs];
    chefs.splice(index, 1);

    this.setState({
      chefs: chefs
    })
  }

  nameChangedHandler = (event, id) => {
    const chefIndex = this.state.chefs.findIndex(c => {
      return c.id === id
    })

    const chef = {
      ...this.state.chefs[chefIndex]
    }

    chef.name = event.target.value;

    const chefs = [...this.state.chefs];
    chefs[chefIndex] = chef;

    this.setState({
      chefs: chefs
    })
  }

  render() { 
    console.log('Home.js inside render');
    
    let chefs = null;

    if(this.state.showChefs){
      chefs = <Chefs 
            chefs={this.state.chefs}
            clicked={this.deleteChefHandler} 
            changed={this.nameChangedHandler} /> 
    }

    return( 
        <div className={appClasses.App}>
          <Cockpit 
            chefs={this.state.chefs}
            showChefs={this.state.showChefs} 
            clicked={this.toggleVisibility} />
          {chefs}
        </div> 
    )
  }
}
// class Home extends Component {
//   constructor () {
//     super()
//     this.state = {}
//     this.getDrinks = this.getDrinks.bind(this)
//     this.getDrink = this.getDrink.bind(this)
//   }

//   componentDidMount () {
//     this.getDrinks()
//   }

//   fetch (endpoint) {
//     return window.fetch(endpoint)
//       .then(response => response.json())
//       .catch(error => console.log(error))
//   }

//   getDrinks () {
//     this.fetch('/api/drinks')
//       .then(drinks => {
//         if (drinks.length) {
//           this.setState({drinks: drinks})
//           this.getDrink(drinks[0].id)
//         } else {
//           this.setState({drinks: []})
//         }
//       })
//   }

//   getDrink (id) {
//     this.fetch(`/api/drinks/${id}`)
//       .then(drink => this.setState({drink: drink}))
//   }

//   render () {
//     let {drinks, drink} = this.state
//     return drinks
//       ? <Container text>
//         <Header as='h2' icon textAlign='center' color='teal'>
//           <Icon name='unordered list' circular />
//           <Header.Content>
//             List of Ingredients
//           </Header.Content>
//         </Header>
//         <Divider hidden section />
//         {drinks && drinks.length
//           ? <Button.Group color='teal' fluid widths={drinks.length}>
//             {Object.keys(drinks).map((key) => {
//               return <Button active={drink && drink.id === drinks[key].id} fluid key={key} onClick={() => this.getDrink(drinks[key].id)}>
//                   {drinks[key].title}
//                 </Button>
//             })}
//           </Button.Group>
//           : <Container textAlign='center'>No drinks found.</Container>
//         }
//         <Divider section />
//         {drink &&
//           <Container>
//             <Header as='h2'>{drink.title}</Header>
//             {drink.description && <p>{drink.description}</p>}
//             {drink.ingredients &&
//               <Segment.Group>
//                 {drink.ingredients.map((ingredient, i) => <Segment key={i}>{ingredient.description}</Segment>)}
//               </Segment.Group>
//             }
//             {drink.steps && <p>{drink.steps}</p>}
//             {drink.source && <Button basic size='tiny' color='teal' href={drink.source}>Source</Button>}
//           </Container>
//         }
//       </Container>
//       : <Container text>
//         <Dimmer active inverted>
//           <Loader content='Loading' />
//         </Dimmer>
//       </Container>
//   }
// }

export default Home