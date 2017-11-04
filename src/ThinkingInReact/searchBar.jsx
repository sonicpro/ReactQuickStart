// Stateless controlled SearchBar component. Controlled by FilterableProductTable component.
// We use onChange event of the two input elements here to be notified about the change and
// reconcile the FilteredProductTable state accordingly.
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    // Fire a parent component's callback passed in as props.onFilterTextChange prop.
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    // Fire a parent component's callback passed in as props.onInStockChange prop.
    this.props.onInStockChange(e.target.checked);
  }

  render () {
    return (
      <form>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange} />
        </div>
        {/* Don't be deluded by the JSX look. "checked" is not an input's attribute here,
        it is the input element property. If it was an attribute,
        the checkbox would render checked whatever the "checked" attribute value was. */}
        <input
          id="checkbox1"
          type="checkbox"
          className="checkbox"
          checked={this.props.inStockOnly}
          onChange={this.handleInStockChange} />
        <label htmlFor="checkbox1">
          {/* Notice the trick to add leading space to the text node content. */}
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }
}
