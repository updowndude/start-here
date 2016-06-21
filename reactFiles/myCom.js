var React = require('react');
var ReactDOM = require('react-dom');

class Home extends React.Component {
  render() {
    var {img} = this.props;
    return (
      <div>
        <h1>Home</h1>
        <p>Need a place to start</p>
        <img id="homePic" src={img} />
      </div>
    );
  }
}

ReactDOM.render(<Home img="images/placeHolder.png" />, document.getElementById('reactHomme'));
