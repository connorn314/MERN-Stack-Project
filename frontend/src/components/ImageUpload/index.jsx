import './imageUpload.css'
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { newProfilePic } from '../../store/users'
const imageMimeType = /image\/(png|jpg|jpeg)/i;

export default function ImageUpload(){
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    const [photo, setPhoto] = useState();
    const [showUploadOption, setShowUploadOption] = useState(false);

    // useEffect(() => {
      
    // }, currentUser)
    const handleSubmit = (e) => {
      e.preventDefault()
      // console.log(photo, "photo")
      dispatch(newProfilePic(currentUser._id, photo))
      .then(setShowUploadOption(false))
    }

    if(currentUser){
    
    return (
        <div id="profile-image-container">
          <div id="profile-image">
          {currentUser.photo && (
            <img src={currentUser.photo} alt="unknown" />
            )}
          </div>
          <div id="image-upload-container">
            {showUploadOption ? (
              <form onSubmit={handleSubmit} id="new-prof-pic-form">
                <input type="file" onChange={(e) => setPhoto(e.target.files[0])} id="input-file-prof"/>
                <div id='add-prof-pic-buttons-container'>
                <button type="submit" id='new-prof-pic-submit'>Submit</button>
                <div onClick={() => setShowUploadOption(false)} id="nevermind">Nevermind</div>
                </div>
              </form>
            ) : (
              <div id='upload-new-photo' onClick={() => setShowUploadOption(true)}>
                +
              </div>
            )}
          </div>
        </div>
    )
}
}