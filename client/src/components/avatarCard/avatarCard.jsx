
import "./avatarCard.css"
import avatar from "../../assets/default-avatar.png" 

function AvatarCard(props){
    return (
        <div className="avatarCard">
            <p>{props.name}</p>
            <img src={props.img ?? avatar}></img>
            <p>{props.role}</p>
        </div>
    )
}

export default AvatarCard;