// Stateful React control that renders a compound element composed from Greeting and either
// LoginButton or LogoutButton components.
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    // Set function context for handleLoginClick and handleLogout click methods.
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    // Initialize private state.
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }

  render() {
    // Declare variable to set to either LoginButton or LogoutButton instance.
    let button = null;

    if (this.state.isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}
