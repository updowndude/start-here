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
try {
  ReactDOM.render(<Home img="images/placeHolder.png" />,
  document.getElementById('reactHome'));
} catch (error) {

}
