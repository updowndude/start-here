class Home extends React.Component {
  render() {
    var {img} = this.props;
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Hom"), 
        React.createElement("p", null, "Need a place to start"), 
        React.createElement("img", {id: "homePic", src: img})
      )
    );
  }
}
try {
  ReactDOM.render(React.createElement(Home, {img: "images/placeHolder.png"}),
  document.getElementById('reactHome'));
} catch (error) {

}

//# sourceMappingURL=myCom.js.map
