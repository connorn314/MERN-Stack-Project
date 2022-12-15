import './imageUpload.css'
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { getOneUser, updateProfilePic, addProfilePic } from '../../store/users'
import * as aws from "aws-sdk"
import { useEffect } from 'react'
import {Buffer} from 'buffer'
const imageMimeType = /image\/(png|jpg|jpeg)/i;

export default function ImageUpload(){
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    const [file, setFile] = useState();
    
    const [fileDataURL, setFileDataURL] = useState(null);
  
    const changeHandler = (e) => {
   
      const file = document.getElementById("uploaded-image").files[0];
      if (!file.type.match(imageMimeType)) {

        alert("Image mime type is not valid");
        return null
      }else{

             setFile(file);
      }

    }
    useEffect(() => {
      let fileReader, isCancel = false;
      if (file) {
        fileReader = new FileReader();
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result && !isCancel) {
            console.log(result)
            setFileDataURL(result)
          }
        }
        fileReader.readAsDataURL(file);
      }
      return () => {
        isCancel = true;
        if (fileReader && fileReader.readyState === 1) {
          fileReader.abort();
        }
      }
      
  
    }, [file]);

    useEffect(() => {
        if(fileDataURL){
           currentUser["photoType"] = fileDataURL.substring(fileDataURL.indexOf(":")+1, fileDataURL.indexOf(";")).split("/")[1]
      
           currentUser["photo"] = fileDataURL
            dispatch(addProfilePic(currentUser))
        }
      
    },[fileDataURL])

    useEffect(() => {
      dispatch(getOneUser(currentUser._id))
      .then(user => {
        console.log(user)
      })
    },[])

    if(currentUser){
    
    return (
        <>
        <div id="profile-image-container">
          <div id="profile-image">
          {file === undefined ?
            null : 
            <img src={currentUser.photo}></img>
            }
      
            </div>
            <div id="image-upload-container">
                <input  type="file" id="uploaded-image" accept="image/jpeg, image/png, image/jpg" ></input>
             <button onClick={changeHandler}>submit</button>
            </div>
            </div>
        </>
    )
}
}