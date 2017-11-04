class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    // Set up the initial state.
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    // Bind the methods.
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(value) {
    this.setState({ filterText: value });
  }

  handleInStockChange(checked) {
    this.setState({ inStockOnly: checked })
  }

  render()
  {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange} />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly} />
        </div>
      );
    }
}
