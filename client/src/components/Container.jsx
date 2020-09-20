import React from 'react';
import axios from 'axios';

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: ''
    }
  }

  changeName(e) {
    this.setState({
      name: event.target.value
    })
  }

  changeAge(e) {
    this.setState({
      age: event.target.value
    })
  }

  submitsql() {
    const self = this;
    axios.post('/sql', {
      name: self.state.name,
      age: self.state.age
    })
    .then(function(response) {
      console.log(response)
    })
    .catch(function(err) {
      console.log(err)
    })
  }

  submitmongo() {
    const self = this;
    axios.post('/mongo', {
      name: self.state.name,
      age: self.state.age
    })
    .then(function(response) {
      console.log(response)
    })
    .catch(function(err) {
      console.log(err)
    })
  }

  render() {
    return (
      <div className='container'>
        <h2>Store Data</h2>
        Name
      <input type="text" value={this.state.value} onChange={this.changeName.bind(this)} ></input>
      Age
      <input type="text" value={this.state.value} onChange={this.changeAge.bind(this)} ></input>
      <button onClick={this.submitsql.bind(this)}>Basic MySQL</button>
      <button onClick={this.submitmongo.bind(this)}>mongodb</button>
      </div>
    )

  }
}

export default Container