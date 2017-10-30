function SearchBar(props) {
  return (
    <form>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      <input id="checkbox1" type="checkbox" />
      <label htmlFor="checkbox1">
        {/* Notice the trick to add leading space to the text node content. */}
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}
