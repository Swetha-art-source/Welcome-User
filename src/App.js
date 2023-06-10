import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome />
        {isLoggedIn && <button type="button">Loggedout</button>}
        {!isLoggedIn && <button type="button">Loggedin</button>}
      </div>
    )
  }
}

export default App
