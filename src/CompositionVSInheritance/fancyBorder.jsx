// Wraps anything passes as the child element in JSX in a div with the colored border.
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {/* props.children is a special prop, you don't have to initialize it in props object. */}
      {props.children}
    </div>
  );
}
