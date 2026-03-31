import Card from "./components/card";
function App() {


  function sum(a, b) {
    return a + b;
  }

  sum(2, 3);

  return (
    <div>

      <Card
        heading="HTML Tutorial"
        content="Study our HTML Tutorial for free
                  no registration needed"
        buttonText="Learn HTML Now"
      />

      <Card
        heading="HTML Certificate"
        content="Upgrade your learning with our
interactive HTML Course and Get Certified."
        buttonText="Get Certified"
      />
    </div>
  )
}

export default App
