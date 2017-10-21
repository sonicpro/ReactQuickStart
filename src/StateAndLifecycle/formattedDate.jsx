// Tiny functional component which single responsibility is to format date property
// of is props as a local time string.
function FormattedDate(props) {
  // Every React component must return a React element, hence returning <h2> element here
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}
