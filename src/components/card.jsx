import { FaHome } from "react-icons/fa";
function Card(props) {
  return (
      <div className="card">
          
          <FaHome />
          <h5>{props.heading}</h5>
          <p>{props.content}</p>
          <button className="btn">{props.buttonText}</button>
    </div>
  )
}
export default Card;