// Despite the name, this component actually renders any array of "printable" objects
// passed in the numbers propsery of props as an  unordered list.
function NumberList(props) {
  return (
    <ul>
      {/* Notice double wrapping in curly braces - map expression is wrapped and the */}
      {/* parameter in the arrow function is wrapped as well. */}
      {props.numbers.map(number =>
      <li>{number}</li>)}
    </ul>
  );
}
