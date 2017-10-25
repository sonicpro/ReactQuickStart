// Stateless component. Interprets falsy value of "warn" property passed in props
// as a signal to hide itself.
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className="warning">
      Warning!
    </div>
  );
}
