// This component illustrates the trick with setting the name of the element same as
// the state property to be able to handle multiple input events.
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.type === 'checkbox' ?
      event.target.checked : event.target.value;
    // Notice ES6 "computed property name" syntax.
    this.setState({
      [event.target.name]: value
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="checkbox1">
          Is going:
        </label>
        <input name="isGoing"
          id="checkbox1"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="number1">
          Number of guests:
        </label>
        <input name="numberOfGuests"
          id="number1"
          type="number"
          value={this.state.numberOfGuests}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}
