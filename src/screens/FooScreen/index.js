import React from 'react';
import { connect } from 'react-redux';

/* style */
import styles from './styles.scss';

@connect(state => ({
  value: state.value,
}))
export default class FooScreen extends React.Component {
  static defaultProps = {
    apiUrl: 'https://api.github.com/repositories',
  }

  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      repository: null,
      webviewUrl: null,
    };
  }

  componentDidMount() {
    console.log('Foo');
  }

  onLinkClick = (e) => {
    e.preventDefault();
    this.setState({
      webviewUrl: e.target.href,
    });
  }

  getRepository = async () => {
    this.setState({
      isFetching: true,
    });

    const response = await fetch(this.props.apiUrl);
    const result = await response.json();

    this.setState({
      isFetching: false,
      repository: result[0],
    });
  }

  render() {
    return (
      <div id="foo">
        <div>
          <p>this is foo</p>
          <span>value:{this.props.value}</span>
        </div>
        <hr />
        <div>
          <button type="button" onClick={this.getRepository}>Get public repository</button>
          {this.state.isFetching && <p>fetching...</p>}
          {this.state.repository &&
            <div>
              <p><a href={this.state.repository.html_url} onClick={this.onLinkClick}>{this.state.repository.full_name}</a></p>
            </div>}
          {this.state.webviewUrl && <webview id="wv" src={this.state.webviewUrl} style={{ width: '100%', height: 640 }} />}
        </div>

      </div>
    );
  }
}
