import { useState } from "react";
import { useEffect } from "react";
import Keyboard from "../Keyboard";


export default function ProfilePage(){

    // const [bindingForm,setBindingForm] = useState({});
    const bindingForm = {}

    const [currentKey, setCurrentKey] = useState('');

    const handleMove = (e) => {
        setCurrentKey(e.target.id)
        console.log(currentKey)
    }
    
    return(
        <>
        <Keyboard currentKey={currentKey} />
        <div id="move-1" onClick={handleMove}>move1</div>
        <div id="move-2" onClick={handleMove}>move2</div>
        </>
    )
}