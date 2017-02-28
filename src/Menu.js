// import React, { Component } from 'react';
// import { List } from './List';
// import { Form } from './Form';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
//
// const Menu = () => {
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">News</Link></li>
//         <li><Link to="/people">People</Link></li>
//       </ul>
//       <hr/>
//       <Route exact path="/" component={News} />
//       <Route path="/people" component={People} />
//     </div>
//   </Router>
// }
//
// const News = () => {
//   <div>
//     <Form searchTitle={this.searchTitle.bind(this)} search={this.state.handleChange} />
//     <List data={this.state.data.filter( result => {
//         const title = result.title === null ? '' : result.title;
//         if (title !== '') return title.toLowerCase().match(this.state.search.toLowerCase())
//       }
//     )} />
//   </div>
// }
//
// const People = () => {
//   <div>
//     <h2>People</h2>
//   </div>
// }
//
// export default Menu
