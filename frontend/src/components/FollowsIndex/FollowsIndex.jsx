import FollowIndexItem from "../FollowIndexItem/FollowIndexItem"
import './FollowsIndex.css'

const FollowsIndex = ({follows}) => {

  return (
    <div id="follows-index-container">
      <div id="follow-index-outline">
        {follows.map(follow => 
          <FollowIndexItem follow={follow} />
        )}
      </div>
    </div>
  )
}

export default FollowsIndex