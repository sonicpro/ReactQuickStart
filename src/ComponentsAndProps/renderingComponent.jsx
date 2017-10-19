// Define a functional component. Notice capital first letter for the component to
// distinguish it from the dom node in JSX.
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Referring the React component from JSX.
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
