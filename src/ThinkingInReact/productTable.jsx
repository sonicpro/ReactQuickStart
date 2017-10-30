class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach(product => {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow
                    category={product.category}
                    key={product.category} />);
      }
      rows.push(<ProductRow
                  product={product}
                  key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <div>
        <div className="column-left">Name</div>
        <div className="column-right">Price</div>
        <div className="clearfix"></div>
        {rows}
      </div>
    );
  }
}
