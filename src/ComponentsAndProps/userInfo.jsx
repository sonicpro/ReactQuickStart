// UserInfo component. Includes the Avatar component.
// As well as Avatar, it is more generic than Comment component, hence "user" property
// rather than "author".
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
