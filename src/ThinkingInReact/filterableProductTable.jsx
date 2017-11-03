class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    // Set up the initial state.
    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }
  render()
  {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly} />
          <ProductTable products={this.props.products} />
        </div>
      );
    }
}
