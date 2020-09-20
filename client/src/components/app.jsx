import React from 'react'
import Container from './Container.jsx'
import List from './List.jsx'


class App extends React.Component {
  render() {
    return (
      <div>
                <h1>Database Practice</h1>
        < Container />
        < List />
      </div>
    )
  }
}

export default App;