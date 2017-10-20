// Comparing to img element in Comment component in sophisticatedComponent.jsx notice
// that "author" property name has changed to more generic "user".
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
