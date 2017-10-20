// Introducing functional component.
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Introducing yet another component that includes the other component three times.
function App() {
  return (
    // Every component must have a single root element, that is the purpose of a <div> element.
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
