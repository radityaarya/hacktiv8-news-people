import React, { Component } from 'react';
import { List } from './List';
import { Filmdata } from './Filmdata';
import { Form } from './Form';
import { Peopledata } from './Peopledata'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/film">Film</Link></li>

      </ul>

      <hr/>

      <Route exact path="/" component={App}/>
      <Route path="/people" component={People}/>
      <Route path="/film" component={Film}/>

    </div>
  </Router>
)

class Film extends Component {
  constructor(){
    super()
    this.state = {
      filmList : []
    }
  }

  componentDidMount(){
    fetch(`http://swapi.co/api/films/`)
    .then(res => res.json())
    .then(data => this.setState ({filmList: data.results }))
  }

  render(){
    return(
      <Filmdata film={this.state.filmList} />
    )
  }
}

class People extends Component {
  constructor(){
    super()
    this.state = {
      peopleList : []
    }
  }

  componentDidMount(){
    fetch(`http://swapi.co/api/people/`)
        .then(res => res.json())
        .then(data => this.setState ({peopleList: data.results}))
  }

  render(){
    return(
      <Peopledata people={this.state.peopleList}/>
    )
  }
}


class App extends Component {
  constructor(){
    super()
    this.state = {
      data: [],
      search : ''
    }
  }

  searchTitle (e) {
    fetch(`http://hn.algolia.com/api/v1/search?query=${e.target.value}`)
        .then(res => res.json())
        .then(data => this.setState ({data: data.hits}))
  }

  render(){

    return(
      <div>
        <Form searchTitle={this.searchTitle.bind(this)} search={this.state.handleChange} />
        <List data={this.state.data.filter( result => {
            return result.title === null ? '' : result.title;
            // if (title !== '') return title.toLowerCase().match(this.state.search.toLowerCase())
          }
        )} />
      </div>
    )
  }
}

export default BasicExample;
