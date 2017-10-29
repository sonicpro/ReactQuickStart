// Helper functions.
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}
// Takes an input and the converter function. Converts the input and rounds to three decimal digits.
function tryConvert(temp, converter) {
  const number = parseFloat(temp);
  if (Number.isNaN(number)) {
    return '';
  }
  let output = converter(number);
  output = Math.round(output * 1000) / 1000;
  return output.toString();
}

// Renders an input that lets you enter the temperature and also renders BoilingVerdict.
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    // Initial state.
    this.state = {
      value: '',
      scale: 'c'
    };
  }
  handleCelsiusChange(value) {
    this.setState({
      value,
      scale: 'c'
    });
  }
  handleFahrenheitChange(value) {
    this.setState({
      value,
      scale: 'f'
    });
  }
  render() {
    const scale = this.state.scale;
    const celsius = scale === 'f' ?
      tryConvert(this.state.value, toCelsius) : this.state.value;
    const fahrenheit = scale === 'c' ?
        tryConvert(this.state.value, toFahrenheit) : this.state.value;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
