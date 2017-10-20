// Comment component. The avatar's 'props.user' is the author of the comment, so let's refer to them as 'props.author'.
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}

function formatDate(date) {
  return date.toLocaleDateString();
}
