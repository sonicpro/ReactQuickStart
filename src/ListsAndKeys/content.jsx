// A component that renders props.posts collection as a number of divs with a heading and a paragraph.
// No "root" element is rendered, so this control is supposed to be used as a part of some hierarchy.
function Content(props) {
  // ASI problem is only applicable to the React elements following the return statement.
  // You can safely omit the parenthesis in the arrow function body.
  return props.posts.map(post =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>);
}
