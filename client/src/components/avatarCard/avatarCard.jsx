
import "./avatarCard.css"
import avatar from "../../assets/default-avatar.png" 


function removeCommasAndSpaces(inputString) {
    // Use the replace() method with a regular expression to remove commas and spaces
    const resultString = inputString?.replace(/[,()\s]/g, '') ?? "";
  
    return resultString;
  }

function AvatarCard(props){
    return (
        <div className="avatarCard">
            <p>{props.name}</p>
            <img src={props.img ?? avatar}></img>
            <p>{props.role}</p>
            <a href={"tel:"+removeCommasAndSpaces(props.tel)}>{props.tel}</a>
        </div>
    )
}

export default AvatarCard;