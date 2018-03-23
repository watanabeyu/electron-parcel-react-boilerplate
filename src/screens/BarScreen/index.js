import React from 'react';
import { connect } from 'react-redux';

/* style */
import styles from './styles.scss';

@connect(state => ({
  value: state.value,
}))
export default class BarScreen extends React.Component {
  componentDidMount() {
    console.log('Bar');
  }

  render() {
    return (
      <div id="bar">
        <p>this is bar</p>
        <span>value:{this.props.value}</span>
      </div>
    );
  }
}
