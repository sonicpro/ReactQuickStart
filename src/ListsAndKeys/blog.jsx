// A component that renders both the sidebar and the content.
function Blog(props) {
  return (
    <div>
      <Sidebar posts={props.posts} />
      <hr />
      <Content posts={props.posts} />
    </div>
  );
}
