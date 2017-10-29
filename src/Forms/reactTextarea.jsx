// Unlike HTML, where the text of a textarea is defined by its child text node,
// React textarea defines its text by the value attribute.
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Notice htmlFor which is substitute for "for" in JSX. */}
        <label htmlFor="textarea1">
          Name:
        </label>
        <textarea id="textarea1"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
