class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: '' };
  }

  handleChange(e) {
    this.setState({
      login: e.target.value
    });
  }
  handleSignUp() {
    // Passing state through closure, not through argument.
    // Notice ES6 template literal in place of string.
    alert(`Welcome abroad, ${this.state.login}!`);
  }

  render () {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?">
        <input
          value={this.state.login}
          onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }
}
