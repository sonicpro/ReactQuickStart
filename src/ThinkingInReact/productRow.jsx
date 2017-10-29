class ProductRow extends React.Component {
  render() {
    return (
      <div>
        <div className="column-left">{this.props.product.name}</div>
        <div className="column-right">{this.props.product.price}</div>
        <div className="clearfix"></div>
      </div>
    );
  }
}
