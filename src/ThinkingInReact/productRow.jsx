class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <div>
        <div className={'column-left' + (product.stocked ? '' : ' out-of-stock')}>
          {product.name}
        </div>
        <div className="column-right">{product.price}</div>
        <div className="clearfix"></div>
      </div>
    );
  }
}
