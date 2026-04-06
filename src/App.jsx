import Card from "./components/card";
import { useState } from "react";
import microImage from "./assets/microsoft.jpg"
import { RxCross2 } from "react-icons/rx";
function App() {

  const items = [
    {
      image: microImage,
      title: "Designed for life today – and tomorrow",
      desc: "The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.",
      btnText: "See if your PC is ready",
    },
    {
      image: microImage,
      title: "Bring the world closer with Bing Wallpaper",
      desc: "Download the free app and enjoy breathtaking views with a new background each day.",
      btnText: "Get wallpaper",
    },
    {
      image: microImage,
      title: "Microsoft Edge",
      desc: "The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.",
      btnText: "See if your PC is ready",
    },
    {
      image: microImage,
      title: "Microsoft OneDrive",
      desc: "The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.",
      btnText: "See if your PC is ready",
    }
  ]

  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div>

      {isOpen && 
        <div className="bg-black/55 h-screen w-100 fixed inset-0 flex items-center justify-center">
        <div className="w-1/2 h-[600px] bg-white rounded-lg ">
          <RxCross2 size={34} className="float-right m-4" onClick={()=> SetIsOpen(false)} />
        </div>
      </div>
      }

      <button onClick={() => SetIsOpen(true)} className="bg-blue-700 text-white rounded-md p-4 float-right">Login In</button>
      <div className="flex gap-8 ml-60 mt-10">


        {items.map((item, index) => {
          return (
            <div key={index}>


              <Card item={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App


