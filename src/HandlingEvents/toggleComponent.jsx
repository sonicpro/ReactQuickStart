class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is nessesary to make 'this' work in the callback.
    // handleClick is a method defined as a concise function, therefore that = this trick won' t work in it.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Parenthesis in the arrow function expression signal that it is the object literal
    // that is returned is enclosed in curly brases, not the function body.
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      // Notice camel case in JSX event names.
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
