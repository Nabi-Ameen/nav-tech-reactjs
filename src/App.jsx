import { Routes, Route } from "react-router";
import Home from "./components/Home";
import SignupForm from "./components/FormikFromHandling";
import AboutUs from "./components/AboutUs";
import { Header } from "./components/header";
import Products from "./components/Products";
function App() {

  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<SignupForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Products />} />

      </Routes>
    </div>
  )
}

export default App


