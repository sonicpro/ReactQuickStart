function SearchBar(props) {
  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={props.filterText}/>
      </div>
      {/* Don't be deluded by the JSX look. "checked" is not an input's attribute here,
      it is the input element property. If it was an attribute,
      the checkbox would render checked whatever the "checked" attribute value was. */}
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
