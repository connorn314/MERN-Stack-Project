import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBinding, getUserBindings } from "../../store/bindings";
import { clearCurrentBindings, fetchGames } from "../../store/games";
import Keyboard from "../Keyboard";
import { useHistory } from "react-router-dom";
import XboxController from "../XboxController"
import BindingIndex from "../BindingsIndex/BindingsIndex";
import x from './green-X.png'
import './ProfilePage.css'



export default function ProfilePage(){
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const bindingForm = {}
    const [currentKey, setCurrentKey] = useState('');
    const games = useSelector(state => Object.values(state.games));
    const [selectedGame, setSelectedGame] = useState('');
    const [moves, setMoves] = useState([])
    const [controller, setController] = useState('')
    const history = useHistory()
    const keybind = useSelector(state => state.currentBindings)
    const bindings = useSelector(state => state.bindings)
    
    useEffect(()=>{
        dispatch(fetchGames())
        dispatch(getUserBindings(user._id))
    },[dispatch, keybind])
    
    const handleCreate = (e) => {
 
        if (Object.values(keybind).length > 0){
            let binding = {
                user: user._id,
                game: selectedGame._id,
                controller: controller,
                keyBinds: keybind
            }
            dispatch(createBinding(binding))
            alert('you did it')   
        }
    }


      
    const handleMove = (e) => {
        if (currentKey !== ''){
            document.getElementById(`${currentKey}-container`).style.backgroundColor = 'transparent'
        }
        setCurrentKey(e.target.id)
        document.getElementById(`${e.target.id}-container`).style.backgroundColor = '#2E294E'
    }

    
    
    const tags = Array.from(document.getElementsByClassName("individual-set-container"))

    tags.map(tag => {
        tag.addEventListener("mouseover", () => {
            if (tag.id === `${currentKey}-container`){
                tag.style.backgroundColor = '#2E294E'
            }else{
                tag.style.backgroundColor = '#2E294E'
            }

        })
        tag.addEventListener("mouseleave", () => {
            if (tag.id === `${currentKey}-container`) {
                tag.style.backgroundColor = 'red'
            } else {
                tag.style.backgroundColor = 'transparent'
            }
        })

    })

    const handleClick = (i) => e => {
        e.preventDefault();

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
        document.getElementById('dropdown-container').style.display = 'none'
    }

    const controllers = {
        "xbox-one": <XboxController currentKey={currentKey}/>,
        "pc": <Keyboard currentKey={currentKey} />
    }

    const handleClose = e => {
        e.preventDefault();
        document.getElementById('profile-main-container').style.display = 'none'
        document.getElementById('dropdown-container').style.display = 'block'
        dispatch(clearCurrentBindings())
        // selectedGame.validMovements.map(move => {
        //     const selectionTag = document.getElementById(`${move}-selection`)
        //     let currentText = selectionTag.innerText
        //     selectionTag.innerText = ''
        // })
        // console.log(currentKey)
        window.location.reload(false)
    }
    console.log(controller)
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
                    <div className="x-positioning"><img onClick={handleClose} src={x}/></div>
                <h1 className="profile-game-title">{selectedGame.title}</h1>
                {controllers[controller]}
                <div className="move-set-container">
                    <div className="individual-set-container1">
                        <div className="move-set-title-name">Moves</div>
                        <div className="move-set-title-binding">Bindings</div>
                    </div>
                        {moves.map((move, i) =>
                            <>
                                <div id={`${move}-container`} className="individual-set-container">
                                    <div className='move-name' id={move} onClick={handleMove}>{move}</div>
                                    <div className="move-binding" id={`${move}-selection`}> </div>
                                </div>
                            </>
                        )}
                </div>
                <button className='create-button' onClick={handleCreate}>Create</button>
            </div>
            <div className="binding-container-profile">
                <BindingIndex currentKey={currentKey} setCurrentKey={setCurrentKey}/>
            </div>
        </div>
        </>
    )
}