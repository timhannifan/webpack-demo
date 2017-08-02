import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  browserHistory
} from 'react-router-dom';
import PropTypes from 'prop-types';

import ListExampleContainer from '../containers/ListExampleContainer';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const NoMatch = ({ location }) => (
  <div>
     <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this)
    // this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }
  componentDidMount() {

  }
  render () {
    console.log(this)
    return (
      <Router history={browserHistory}>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/react-redux">react-redux</Link></li>
            <li><Link to="/not/found/url">404</Link></li>
          </ul>

          <hr/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/react-redux" component={ListExampleContainer}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;