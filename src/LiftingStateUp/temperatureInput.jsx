const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

// Controlled component. Takes its value as well as the onChange callback in props.
// Takes either "c" (Celsius) or "f" ("Fahrenheit") in scale prop in the constructor.
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  // Handles an input "change" event, so "value" is appropriate here.
  // This component prop for the same data is called "temperature".
  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        {/* The following onChange is the input's attribute, not the TempleratureInput one. */}
        <input
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}
