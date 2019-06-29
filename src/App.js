import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWhiskies } from './actions'
import WhiskyGrid from './components/WhiskyGrid'





class App extends Component {
  render() {
    const { fetchWhiskies, isLoading, error, whiskies } = this.props
    return (
      <div className="App">
        <button onClick={fetchWhiskies}>Fetch Whiskies</button>
        {isLoading && <h1>Fetching data</h1>}
        {!isLoading && !error && <WhiskyGrid whiskies={whiskies} />}
        {error && <h1>{error}</h1>}
      </div>
    );
  }
}

const mapSateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => bindActionCreators({ fetchWhiskies }, dispatch)

export default connect(mapSateToProps, mapDispatchToProps)(App);