function SearchBar(props) {
  return (
    <form>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      <input id="checkbox1" type="checkbox" />
      <label htmlFor="checkbox1">
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}
