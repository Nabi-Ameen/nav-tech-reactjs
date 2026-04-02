import Card from "./components/card";
import microImage from "./assets/microsoft.jpg"
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

  return (
    <div className="flex gap-8">
      {items.map((item, index) => {
        return (
          <div key={index}>
            <Card item={item} />
          </div>
        )
      })}
    </div>
  )
}

export default App


