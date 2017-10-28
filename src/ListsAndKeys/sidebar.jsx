// A component that renders a props.posts collection as an unordered list.
function Sidebar(props) {
  return (
    <ul>
      {props.posts.map(post =>
        <li key={post.id}>
          {post.title}
        </li>)
      }
    </ul>
  );
}
