import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBinding, fetchGames } from "../../store/games";
import Keyboard from "../Keyboard";
import { useHistory } from "react-router-dom";
import './ProfilePage.css'



export default function ProfilePage(){
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const bindingForm = {}
    const [currentKey, setCurrentKey] = useState('');
    const games = useSelector(state => Object.values(state.games));
    const [selectedGame, setSelectedGame] = useState('');
    const [moves, setMoves] = useState([])
    // const [keyBind, setKeyBind] = useState('')
    const [controller, setController] = useState('')
    const history = useHistory()
    const keybind = useSelector(state => state.currentBindings)
    
    useEffect(()=>{
        dispatch(fetchGames())
    },[dispatch, keybind])
    
    const handleCreate = (e) => {
 
        if (Object.values(keybind).length > 0){
            let binding = {
                user: user._id,
                game: selectedGame._id,
                controller: controller,
                keyBinds: keybind
            }
            console.log(binding)
            dispatch(createBinding(binding))
            alert('you did it')   
        }
    }


      
    const handleMove = (e) => {
        setCurrentKey(e.target.id)

    }

    
    
    const tags = Array.from(document.getElementsByClassName("individual-set-container"))

    tags.map(tag => {
        tag.addEventListener("mouseover", () => {
            tag.style.backgroundColor = '#2E294E'
        })
        tag.addEventListener("mouseleave", () => {
            tag.style.backgroundColor = 'transparent'
        })
    })

    const handleClick = (i) => e => {
        const gameObject = games[e.target.id]

        setSelectedGame(gameObject)
        setMoves(gameObject.validMovements)

        if (i === 0){
            setController('xbox-one')
        }else if (i === 1){
            setController('pc')
        } else if (i === 2){
            setController('game-cube')
        }
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
                                <li id={i} onClick={handleClick(i)}>{game.title}</li>
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
                                    <div className="move-binding" id={`${move}-selection`}> </div>
                                </div>
                            </>
                        )}
                </div>
                <button onClick={handleCreate}>Create</button>
            </div>
        </div>
        </>
    )
}