import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getOneUser } from "../../store/users";
import FollowButton from "../FollowButton"
import './FollowIndexItem.css'

const FollowIndexItem = ({follow}) =>{
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const author = useSelector(state => state.users[follow.userFollowed])

  useEffect(() => {
    dispatch(getOneUser(follow.userFollowed))
  }, [])

  if (author === undefined){
    return null
  }


 

  return (
    <>
      <div className="main-individual-follow-container">
        <div id="follow-item-container">
          <div id="follow-button-container-profile">
            <div className="positioning-follow-container">
              <FollowButton userId={follow.userFollowed}/>
            </div>
          </div>
          <div id="profile-image-container">
            <div id="actual-mini-thumbnail">
              <div>Img</div>
            </div>
          </div>
          <div id="follower-detail-container">
            <div className="user-follow-info1">username:</div>
            <div className="user-follow-info2">{author.username}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FollowIndexItem
