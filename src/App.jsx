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


  const [formData, setFormData] = useState(
    {
      name: "",
      age: "",
      gender: "",
      language: "",
      hobies: []
    }
  )

  const handleInputFields = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleCheckbox = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        hobies: [...formData.hobies, value]
      })
    } else {
      setFormData({
        ...formData,
        hobies: [...formData.hobies.filter((hoby) => hoby !== value)]
      })
    }
  }

  console.log("formData", formData)

  const hobies = ["cricket", "hokey", "reading"]

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData)
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
            value={formData.name}
            onChange={handleInputFields}
            className="w-[400px] border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleInputFields}
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
                value="male"
                checked={formData.gender === "male"}
                onChange={handleInputFields}
              />
              <label htmlFor="name">male</label>
            </div>

            <div>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleInputFields} />
              <label htmlFor="female">female</label>
            </div>


          </div>
          <div className="mt-10">

            <select
              name="language"
              id="language"
              className="w-[300px]"
              onChange={handleInputFields}
            >
              <option value="html">html</option>
              <option value="css">css</option>
              <option value="js">js</option>
              <option value="reactjs">reactjs</option>
            </select>
          </div>

          <div className="flex items-center gap-9 mt-10">
            {
              hobies.map((hoby, index) => {
                return (
                  <div key={index}>
                    <label htmlFor="hobies">
                      <input
                        type="checkbox"
                        name="hobies"
                        value={hoby}
                        id="hobies"
                        onChange={handleCheckbox}
                      />
                      {hoby}
                    </label>
                  </div>
                )
              })
            }


          </div>


        </div>

        <button type="submit" onClick={handleSubmit} className="bg-blue-600 text-white px-12 py-4 rounded-lg">Save</button>
      </form>
    </div>
  )
}

export default App


