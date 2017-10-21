class Clock extends React.Component {
  constructor(props) {
    super(props);
    // The date property is moved from the props to the internal state.
    this.state = {date: new Date()};
  }

  // componentDidMount hook runs after the component output has been rendered to the DOM.
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  // In this hook we will tear down the timer.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Update the component's local state by means of base class' setState().
  // What are you going to use in render(), that should be in this.state.
  tick() {
    this.setState({
      date: new Date()
    });
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
