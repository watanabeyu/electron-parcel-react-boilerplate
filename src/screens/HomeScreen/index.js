import React from 'react';
import { connect } from 'react-redux';

/* style */
import styles from './styles.scss';

@connect(state => ({
  value: state.value,
}))
export default class HomeScreen extends React.Component {
  componentDidMount() {
    console.log('Home');
  }

  onIncrementClick = (e) => {
    this.props.dispatch({ type: 'VALUE_INCREMENT' });
  }

  onDecrementClick = (e) => {
    this.props.dispatch({ type: 'VALUE_DECREMENT' });
  }

  onResetClick = (e) => {
    this.props.dispatch({ type: 'VALUE_RESET' });
  }

  render() {
    return (
      <div id="home">
        <div>
          <p>this is home</p>
          <span>value:{this.props.value}</span>
        </div>
        <button type="button" onClick={this.onIncrementClick}>+1</button>
        <button type="button" onClick={this.onDecrementClick}>-1</button>
        <button type="button" onClick={this.onResetClick}>Reset</button>
      </div>
    );
  }
}
