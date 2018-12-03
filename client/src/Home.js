import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import Chef from './Chef/Chef';

class Home extends Component {
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
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let chefs = null;

    if(this.state.showChefs){
      chefs = (
        <div>
          {this.state.chefs.map((chef, index) => {
            return (
              <Chef 
                click = { () => this.deleteChefHandler(index) }
                key = {chef.id}
                name = {chef.name}
                age = {chef.age}
                changed = { (event) => this.nameChangedHandler(event, chef.id) }
              />
            )
          })}
        </div>
      )

      buttonStyle.backgroundColor = "red"
    }

    return( 
        <div className="Home">
          <button style={buttonStyle} onClick={this.toggleVisibility}>Toggle Visibility</button>
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