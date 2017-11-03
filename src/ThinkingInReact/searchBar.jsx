function SearchBar(props) {
  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={props.filterText}/>
      </div>
      <input
        id="checkbox1"
        type="checkbox"
        className="checkbox"
        checked={props.inStockOnly} />
      <label htmlFor="checkbox1">
        {/* Notice the trick to add leading space to the text node content. */}
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}
