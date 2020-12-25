import React, { Component } from 'react'
//import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Splider from './components/Splider';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(users => {
        this.setState({
          robots: users
        });
      });
    
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value 
    });
  }

  render() {
    const filtered = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    // Main Render
    return (
      <div className="App tc">
        <h1>RoboBros!</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Splider robots={filtered}/>
        {/* <CardList robots={filtered}/> */}
      </div>
    )
  }
}

export default App
