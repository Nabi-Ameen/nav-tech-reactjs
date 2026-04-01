import { FaHome } from "react-icons/fa";
function Card(props) {

  const name = "ali" ;
  console.log(`my name is ${name}`);

  return (
    <div className={`${props.color ? "greencard" : "purpleCard"}`}>
          <FaHome />
          <h5>{props.heading}</h5>
          <p>{props.content}</p>
          <button className="btn">{props.buttonText}</button>
    </div>
  )
}
export default Card;