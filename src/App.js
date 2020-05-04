import React ,{Component} from 'react';
import './App.css';
import {CardList} from './Components/Card-list/Card-list.component';
import {SearchBox} from './Components/Search-box/Search-box.component';

class App extends Component {

   constructor() {
     super();

     this.state = {
       monsters: [],
       searchField: ''
     };
   }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  render() {
    const {monsters,searchField} = this.state;   //same as const monsters = this.state.monsters and same fot field
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      
      <React.Fragment>
            <h1>Monsters Rolodex</h1>
           <SearchBox 
            placeholder1='Search Monsters' 
            handleChange={e => this.setState({searchField: e.target.value})} />

            <CardList monsters = {filteredMonsters} />
      </React.Fragment>
    );
  }
}

export default App;
