import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getOneUser } from "../../store/users";
import FollowButton from "../FollowButton"
import './FollowIndexItem.css'

const FollowIndexItem = ({follow}) =>{
  const dispatch = useDispatch();

 

  return (
    <>
      <div className="main-individual-follow-container">
        <div id="follow-item-container">
          <div id="profile-image-container">
            <div>Img</div>
          </div>
          <div id="follow-username-container">
            <div>username here</div>
          </div>
          <div id="follow-button-container-profile">
            <FollowButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default FollowIndexItem

