import React from 'react';
import axios from 'axios';

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }


  showSql() {
    const self = this
    axios.get('/sql')
    .then((response) => {
      self.setState({
        data: response.data
      })
      console.log(self.state.data)
    })
  }

  showMongo() {
    const self = this
    axios.get('/mongo')
    .then((response) => {
      self.setState({
        data: response.data
      })
      console.log(self.state.data)
    })
  }

  render() {
    return (
      <div>
      <h2>Show Data</h2>
      <button onClick={this.showSql.bind(this)}>Basic MySQL</button>
      <button onClick={this.showMongo.bind(this)}>mongodb</button>
        {this.state.data.map((person)=>(
          <div>
          <div>Name: {person.name}</div>
          <div>Age: {person.age}</div>
          </div>
        ))}
      </div>

    )
  }
}

export default List;