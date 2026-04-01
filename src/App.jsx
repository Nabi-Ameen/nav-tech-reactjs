import Button from "./components/Button";
import Card from "./components/card";
function App() {


  function sum(a, b) {
    return a + b;
  }

  sum(2, 3);

  return (
    <div className="">

      <Card
        heading="HTML Tutorial"
        content="Study our HTML Tutorial for free
                  no registration needed"
        buttonText="Learn HTML Now"
        color={true}
      />

      <Card
        heading="HTML Certificate"
        content="Upgrade your learning with our
interactive HTML Course and Get Certified."
        buttonText="Get Certified"
        color={false}
      />


      <Button isFill={true} />
      <Button isFill={false} />
      <Button isFill={true} />
      
    </div>
  )
}

export default App


// import Card from "./components/card"
// import PackingList from "./components/PackingList"
// function App() {
//   return (
//     <div>
//       {/* <PackingList /> */}

//       <Card />
//     </div>
//   )
// }

// export default App

