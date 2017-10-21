class Clock extends React.Component {
  constructor(props) {
    super(props);
    // The date property is moved from the props to the internal state.
    this.state = {date: new Date()};
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
