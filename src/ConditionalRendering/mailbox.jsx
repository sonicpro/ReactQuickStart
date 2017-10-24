// Stateless mailbox component. Used as an example of shortening if statement in JavaScript
// using && operator.
function Mailbox(props) {
  return (
    <div>
      <h1>Hello!</h1>
      {/* Do not forget curly braces around JavaScript expressions in JSX. */}
      {/* The following expression evaluates either to false or to <h2> element. */}
      {props.unreadMessages.length > 0 &&
        <h2>
          You have {props.unreadMessages.length} unread messages.
        </h2>}
    </div>
  );
}
