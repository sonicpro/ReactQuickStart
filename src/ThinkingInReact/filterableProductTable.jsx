function FilterableProductTable(props) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={props.products} />
    </div>
  );
}
