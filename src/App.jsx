import Card from "./components/card";
import { useState } from "react";
import microImage from "./assets/microsoft.jpg"
import { RxCross2 } from "react-icons/rx";
function App() {



  // firstName,
  // lastName,
  // email,
  // rollNo,
  //age,
  //address,
  //gender,
  //subjects: 10 subject names select field


  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, age, gender, language)
  }


  return (
    <div className="flex items-center justify-center mt-10">
      <form className="w-1/2 bg-slate-300 rounded-md p-10 space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-[400px] border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="AGE"
            className="w-[400px] border rounded-lg p-2" />
        </div>

        <div className="flex flex-col">
          <p>Gender</p>
          <div className="flex gap-9">
            <div>
              <input
                type="radio"
                name="gender"
                id="male"
                checked={gender === "male"}
                onClick={(e) => setGender("male")} />
              <label htmlFor="name">male</label>
            </div>

            <div>
              <input
                type="radio"
                name="gender"
                id="female"
                checked={gender === "female"}
                onClick={(e) => setGender("female")} />
              <label htmlFor="female">female</label>
            </div>


          </div>
          <div className="mt-10">

            <select
              name="language"
              id="language"
              className="w-[300px]"
              onChange={(e)=> setLanguage(e.target.value)}
            >
              <option value="html">html</option>
              <option value="css">css</option>
              <option value="js">js</option>
              <option value="reactjs">reactjs</option>
            </select>
          </div>


        </div>

        <button type="submit" onClick={handleSubmit} className="bg-blue-600 text-white px-12 py-4 rounded-lg">Save</button>
      </form>
    </div>
  )
}

export default App


