import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* common components */
import Header from 'app/src/components/Header';

/* screens */
import HomeScreen from 'app/src/screens/HomeScreen';
import FooScreen from 'app/src/screens/FooScreen';
import BarScreen from 'app/src/screens/BarScreen';

export default class App extends React.Component {
  componentDidMount() {
    console.log('App didmount');
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/foo" component={FooScreen} />
          <Route path="/bar" component={BarScreen} />
          <Route path="*" component={() => (<div>NoMatch</div>)} />
        </Switch>
      </div>
    );
  }
}
