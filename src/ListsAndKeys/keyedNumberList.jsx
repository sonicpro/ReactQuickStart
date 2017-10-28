// Stateless component that takes a an array of "printable" elements and
// renders them as an unordered list. "li" elements are extracted to a
// separate "ListItem" component.
function NumberList(props) {
  // A good rule of thumb is that elements inside the map() call need keys.
  return (
    <ul>
      {props.numbers.map(number =>
        <ListItem key={number.toString()} value={number} />)
      }
    </ul>
  );
}
