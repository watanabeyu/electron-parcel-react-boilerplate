import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* image */
import images from 'app/src/images';

/* style */
import styles from './styles.scss';

@connect(state => ({
  value: state.value,
}))
export default class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <img src={images.logo} alt="logo" height="60" />
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/foo">Foo</Link>
        </div>
        <div>
          <Link to="/bar">Bar</Link>
        </div>
        <div>
          <Link to="/hoge">Hoge</Link>
        </div>
      </div>
    );
  }
}
