import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../../store/games";
import Keyboard from "../Keyboard";
import './ProfilePage.css'


export default function ProfilePage(){
    const dispatch = useDispatch();
    const bindingForm = {}
    const [currentKey, setCurrentKey] = useState('');
    const games = useSelector(state => Object.values(state.games))
    const [moves, setMoves] = useState([])

    useEffect(()=>{
        dispatch(fetchGames())
    },[])
      
    const handleMove = (e) => {
        setCurrentKey(e.target.id)
        // console.log(currentKey)
        // document.getElementById(`${move}-${i}`).style.innerHTML = currentKey
    }

    const moveSet = ['a', 'b', 'c']
    
    
    const tags = Array.from(document.getElementsByClassName("individual-set-container"))

    tags.map(tag => {
        tag.addEventListener("mouseover", () => {
            tag.style.backgroundColor = '#2E294E'
        })
        tag.addEventListener("mouseleave", () => {
            tag.style.backgroundColor = 'transparent'
        })
    })

    const handleClick = e => {
        const gameObject = games[e.target.id]
        setMoves(gameObject.validMovements)
        document.getElementById('profile-main-container').style.display = 'flex'
        // document.getElementById('dropdown-container').style.display = 'none'
    }

    return(
        <>
        <div className="background-div-profile">
            <div id="dropdown-container">
                <ul>
                    <li><button className="add-keybind-button">Add Keybindings</button>
                        <ul class="dropdown">
                            {games.map((game, i)=>
                                <li id={i} onClick={handleClick}>{game.title}</li>
                                )}
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="profile-main-container">
                <Keyboard currentKey={currentKey} />
                <div className="move-set-container">
                    <div className="individual-set-container1">
                        <div className="move-set-title-name">Moves</div>
                        <div className="move-set-title-binding">Bindings</div>
                    </div>
                        {moves.map((move, i) =>
                            <>
                                <div className="individual-set-container">
                                    <div className='move-name' id={move} onClick={handleMove}>{move}</div>
                                    <div className="move-binding" id={`${move}-${i}`}> </div>
                                </div>
                            </>
                        )}
                </div>
            </div>
        </div>
        </>
    )
}