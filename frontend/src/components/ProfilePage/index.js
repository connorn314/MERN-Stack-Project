import { useState } from "react";
import { useEffect } from "react";
import Keyboard from "../Keyboard";
import './ProfilePage.css'


export default function ProfilePage(){

    // const [bindingForm,setBindingForm] = useState({});
    const bindingForm = {}
    const [currentKey, setCurrentKey] = useState('');
    // useEffect(() => {
    //     alert(currentKey)
    //   },[currentKey])

    const moveSet = ['move1', 'move2','move3', 'move4', 'move5']
      
    const handleMove = (e) => {
        setCurrentKey(e.target.id)
        console.log(currentKey)
    }
    
    const tags = Array.from(document.getElementsByClassName("individual-set-container"))

    tags.map(tag => {
        tag.addEventListener("mouseover", () => {
            tag.style.backgroundColor = 'red' 
        })
        tag.addEventListener("mouseleave", () => {
            tag.style.backgroundColor = 'transparent'
        })
    })

    return(
        <>
        <div className="profile-main-container">
            <Keyboard currentKey={currentKey} />
            <div className="move-set-container">
                <div className="individual-set-container1">
                    <div className="move-set-title-name">Moves</div>
                    <div className="move-set-title-binding">Bindings</div>
                </div>
                {moveSet.map(move =>
                    <>
                        <div className="individual-set-container">
                            <div className='move-name' id={move} onClick={handleMove}>{move}</div>
                            <div className="move-binding">q</div>
                        </div>
                    </>
                )}

            </div>
        </div>
        </>
    )
}