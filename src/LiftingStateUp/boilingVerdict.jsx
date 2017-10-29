// A component that prints whether water boils given the celsius prop value.
function BoilingVerdict(prop) {
  if (prop.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
