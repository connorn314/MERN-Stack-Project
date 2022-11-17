import React, { useEffect } from "react";
import { useState } from "react";
import {useDispatch}  from "react-redux"
import { useParams } from "react-router-dom";
import {addBinding} from '../../store/games'
import { receiveCurrentUser } from "../../store/session";

export default function Keyboard ({currentKey}){
  const {game_id} = useParams()

  const dummyId = 0
  const [binding, setBinding] = useState({})
  const [selectedKey, setSelectedKey] = useState()
  const dispatch = useDispatch()
  // const userId = dispatch(receiveCurrentUser)
  const [selectionTag, setSelectionTag] = useState()
  useEffect(()=>{
    let selectionTag
    document.addEventListener("keypress", (e) => {
      if (currentKey !== '') {
        setSelectedKey(e.code)
        setBinding({ [currentKey]: e.key })
      }
    })
    if(selectedKey !== undefined && currentKey !== ''){
    
      const selectionTag = document.getElementById(`${currentKey}-selection`)

      let currentText = selectionTag.innerText
      console.log(currentText)
      selectionTag.innerText = selectedKey
      dispatch(addBinding({ [currentKey]: selectedKey }))
 
    }
  
  },[currentKey,selectedKey])



  


  const tags = Array.from(document.getElementsByClassName("key" ))

  tags.forEach(tag => {

    if(binding[currentKey] === tag.id){
      const fillColor = "red"
      tag.setAttribute("style",`fill: ${fillColor}; fill-opacity:1;fill-rule:evenodd;stroke:;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dashoffset:0;stroke-opacity:1`)
    }else{
      tag.setAttribute("style","fill: white;fill-opacity:0;fill-rule:evenodd;stroke:#49fb35;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dashoffset:0;stroke-opacity:1")
    }

  })

  return (
  <>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="900"
  height="300"
  version="1"
  >
  <defs>
  <marker orient="auto" overflow="visible" refX="0" refY="0">
  <path
    fillRule="evenodd"
    stroke="#49fb35"
    strokeWidth=".8pt"
    markerStart="none"
    d="M0 0l-4 4 14-4-14-4 4 4z"
  ></path>
  </marker>
  <marker orient="auto" overflow="visible" refX="0" refY="0">
  <path
    fillRule="evenodd"
    stroke="#49fb35"
    strokeWidth=".8pt"
    markerStart="none"
    d="M0 0l4-4-14 4L4 4 0 0z"
  ></path>
  </marker>
  <marker orient="auto" overflow="visible" refX="0" refY="0">
  <g
    fill="none"
    fillRule="evenodd"
    stroke="#49fb35"
    strokeLinecap="round"
    strokeWidth="0.8"
    markerEnd="none"
    markerStart="none"
    transform="scale(-1.2)"
  >
    <path d="M-3.805-3.959L.544 0"></path>
    <path d="M-1.287-3.959L3.062 0"></path>
    <path d="M1.305-3.959L5.654 0"></path>
    <path d="M-3.805 4.178L.544.22"></path>
    <path d="M-1.287 4.178L3.062.22"></path>
    <path d="M1.305 4.178L5.654.22"></path>
  </g>
  </marker>
  <marker orient="auto" overflow="visible" refX="0" refY="0">
  <path
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeWidth="0.625"
    d="M8.719 4.034L-2.207.016 8.719-4.002c-1.746 2.372-1.736 5.618 0 8.036z"
    fontSize="12"
    transform="matrix(-.6 0 0 -.6 3 0)"
  ></path>
  </marker>
  <marker orient="auto" overflow="visible" refX="0" refY="0">
  <path
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeWidth="0.625"
    d="M8.719 4.034L-2.207.016 8.719-4.002c-1.746 2.372-1.736 5.618 0 8.036z"
    fontSize="12"
    transform="matrix(-1.1 0 0 -1.1 5.5 0)"
  ></path>
  </marker>
  <marker orient="auto" overflow="visible" refX="0" refY="0">
  <path
    fillRule="evenodd"
    stroke="#49fb35"
    strokeWidth=".2pt"
    markerStart="none"
    d="M0 0l-1 1 3.5-1L-1-1l1 1z"
  ></path>
  </marker>
  <marker orient="auto" overflow="visible" refX="0" refY="0">
  <path
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeWidth="0.625"
    d="M8.719 4.034L-2.207.016 8.719-4.002c-1.746 2.372-1.736 5.618 0 8.036z"
    fontSize="12"
    transform="matrix(-.3 0 0 -.3 1.5 0)"
  ></path>
  </marker>
  <marker orient="auto" overflow="visible" refX="0" refY="0">
  <path
    fillRule="evenodd"
    stroke="red"
    strokeWidth=".4pt"
    markerStart="none"
    d="M0 0l-2 2 7-2-7-2 2 2z"
  ></path>
  </marker>
  <marker orient="auto" overflow="visible" refX="0" refY="0">
  <path
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeWidth="0.625"
    d="M8.719 4.034L-2.207.016 8.719-4.002c-1.746 2.372-1.736 5.618 0 8.036z"
    fontSize="12"
    transform="translate(-5.5) scale(1.1)"
  ></path>
  </marker>
  </defs>
  <g>
  <path
  id="~"

  
  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M0 0h60v60H0V0z"
  ></path>
  <path
  id="!"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M60 0h60v60H60V0z"
  ></path>
  <path

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M120 0h60v60h-60V0z"
  ></path>
  <path

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M180 0h60v60h-60V0z"
  ></path>
  <path

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M240 0h60v60h-60V0z"
  ></path>
  <path

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M300 0h60v60h-60V0z"
  ></path>
  <path

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M360 0h60v60h-60V0z"
  ></path>
  <path

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M420 0h60v60h-60V0z"
  ></path>
  <path

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M480 0h60v60h-60V0z"
  ></path>
  <path

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M540 0h60v60h-60V0z"
  ></path>
  <path

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M600 0h60v60h-60V0z"
  ></path>
  <path

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M660 0h60v60h-60V0z"
  ></path>
  <path

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M720 0h60v60h-60V0z"
  ></path>
  <path

  className="key"
  fill="#dfdfdf"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M780 0h120v60H780V0z"
  ></path>
  <path


  className="key"
  fill="#dfdfdf"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M0 60h90v60H0V60z"
  ></path>
  <path
   id="q"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M90 60h60v60H90V60z"
  ></path>
  <path
  id="w"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M150 60h60v60h-60V60z"
  ></path>
  <path
  id="e"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M210 60h60v60h-60V60z"
  ></path>
  <path
  id="r"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M270 60h60v60h-60V60z"
  ></path>
  <path
  id="t"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M330 60h60v60h-60V60z"
  ></path>
  <path
    id="y"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M390 60h60v60h-60V60z"
  ></path>
  <path
  id="u"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M450 60h60v60h-60V60z"
  ></path>
  <path
  id="i"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M510 60h60v60h-60V60z"
  ></path>
  <path
  id="o"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M570 60h60v60h-60V60z"
  ></path>
  <path
  id="p"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M630 60h60v60h-60V60z"
  ></path>
  <path


  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M690 60h60v60h-60V60z"
  ></path>
  <path


  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M750 60h60v60h-60V60z"
  ></path>
  <path


  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M810 60h90v60h-90V60z"
  ></path>
  <path


  className="key"
  fill="#dfdfdf"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M0 120h105v60H0v-60z"
  ></path>
  <path
  id="a"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M105 120h60v60h-60v-60z"
  ></path>
  <path
  id="s"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M165 120h60v60h-60v-60z"
  ></path>
  <path
  id="d"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M225 120h60v60h-60v-60z"
  ></path>
  <path
      id="f"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M285 120h60v60h-60v-60z"
  ></path>
  <path
      id="g"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M345 120h60v60h-60v-60z"
  ></path>
  <path
  id="h"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M405 120h60v60h-60v-60z"
  ></path>
  <path
      id="j"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M465 120h60v60h-60v-60z"
  ></path>
  <path
      id="k"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M525 120h60v60h-60v-60z"
  ></path>
  <path
      id="l"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M585 120h60v60h-60v-60z"
  ></path>
  <path
  id=";"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M645 120h60v60h-60v-60z"
  ></path>
  <path
  id="'"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M705 120h60v60h-60v-60z"
  ></path>
  <path
  id="enter"

  className="key"
  fill="#dfdfdf"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M765 120h135v60H765v-60z"
  ></path>
  <path
      id="shift"

  className="key"
  fill="#dfdfdf"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M0 180h135v60H0v-60z"
  ></path>
  <path
      id="z"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M135 180h60v60h-60v-60z"
  ></path>
  <path
        id="x"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M195 180h60v60h-60v-60z"
  ></path>
  <path
      id="c"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M255 180h60v60h-60v-60z"
  ></path>
  <path
        id="v"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M315 180h60v60h-60v-60z"
  ></path>
  <path
        id="b"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M375 180h60v60h-60v-60z"
  ></path>
  <path
        id="n"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M435 180h60v60h-60v-60z"
  ></path>
  <path
        id="m"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M495 180h60v60h-60v-60z"
  ></path>
  <path
        id=","

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M555 180h60v60h-60v-60z"
  ></path>
  <path
        id="."

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M615 180h60v60h-60v-60z"
  ></path>
  <path
   id="/"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M675 180h60v60h-60v-60z"
  ></path>
  <path
        id="shift-r"

  className="key"
  fill="#dfdfdf"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M735 180h165v60H735v-60z"
  ></path>
  <path
    id="ctrl-l"

  className="key"
  fill="#dfdfdf"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M0 240h90v60H0v-60z"
  ></path>
  <path
  id="ctrl-r"

  className="key"
  fill="#dfdfdf"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M810 240h90v60h-90v-60z"
  ></path>
  <path
 

  className="key"
  fill="#dfdfdf"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M150 240h90v60h-90v-60z"
  ></path>
  <path


  className="key"
  fill="#dfdfdf"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M600 240h90v60h-90v-60z"
  ></path>
  <path
       id="space"

  className="key"
  fill="#fff"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M240 240h360v60H240v-60z"
  ></path>
  <path

  className="key"
  fill="#efefef"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M90 240h60v60H90v-60z"
  ></path>
  <path

  className="key"
  fill="#efefef"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M690 240h60v60h-60v-60z"
  ></path>
  <path
  

  className="key"
  fill="#efefef"
  fillOpacity="0"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeDashoffset="0"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="1"
  d="M750 240h60v60h-60v-60z"
  ></path>
  <path


  className="key"
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M75.352 18.826l-.915-7.77V6.37h3.61v4.688l-.914 7.77h-1.781m-.868 4.804v-3.457h3.48v3.457h-3.48m.868 30V42.158h-4.008v-2.355h.258c1.46 0 2.523-.227 3.187-.68.672-.453 1.066-1.21 1.184-2.273h2.683v16.78h-3.304"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path

  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M23.344 14.22v2.59c-.813.555-1.582.965-2.309 1.231a6.287 6.287 0 01-2.133.387 6.28 6.28 0 01-1.078-.094 7.766 7.766 0 01-1.078-.27 37.89 37.89 0 01-.832-.293c-1.71-.585-3.012-.878-3.902-.878-.664 0-1.36.148-2.086.445-.719.289-1.528.754-2.426 1.394v-2.59c.836-.562 1.633-.98 2.39-1.253.758-.282 1.473-.422 2.145-.422.914 0 2.05.226 3.41.68a.19.19 0 00.047.011c.14.047.356.121.645.223 1.21.43 2.148.644 2.812.644.664 0 1.348-.144 2.051-.433.703-.29 1.484-.746 2.344-1.371M11.988 35.033h3.024l2.308 4.336h-1.664l-3.668-4.336"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M136.476 20.443c-.43.657-.926 1.141-1.488 1.453-.563.305-1.227.458-1.993.458-1.234 0-2.175-.336-2.824-1.008-.64-.672-.96-1.664-.96-2.977 0-1.867.542-3.433 1.628-4.7 1.094-1.265 2.438-1.898 4.031-1.898.625 0 1.168.13 1.63.387.46.258.839.64 1.136 1.149l.621-1.149h2.086l-1.723 7.008a2.72 2.72 0 00-.058.27 1.226 1.226 0 00-.024.21c0 .274.094.481.282.622.187.132.464.199.832.199.304 0 .62-.078.949-.235a3.4 3.4 0 00.937-.656 6.164 6.164 0 001.524-2.191c.351-.836.527-1.754.527-2.754 0-1.875-.727-3.414-2.18-4.617-1.445-1.211-3.312-1.817-5.601-1.817-1.102 0-2.13.133-3.082.399a8.823 8.823 0 00-2.578 1.183c-1.328.89-2.352 2.004-3.07 3.34-.712 1.336-1.067 2.8-1.067 4.395 0 2.398.809 4.316 2.426 5.754 1.617 1.43 3.777 2.144 6.48 2.144 1.266 0 2.5-.191 3.703-.574a12.354 12.354 0 003.375-1.664l.961 1.37a13.492 13.492 0 01-3.808 2.028c-1.336.453-2.73.68-4.184.68-1.5 0-2.879-.191-4.137-.574a10.387 10.387 0 01-3.351-1.676c-1.211-.945-2.117-2.035-2.719-3.27-.602-1.234-.902-2.632-.902-4.195 0-1.305.203-2.547.61-3.726a10.486 10.486 0 011.815-3.235 11.276 11.276 0 014.172-3.21c1.625-.727 3.434-1.09 5.426-1.09 1.32 0 2.559.18 3.715.538 1.164.352 2.176.852 3.035 1.5 1.055.82 1.84 1.758 2.356 2.813.523 1.047.785 2.23.785 3.55 0 1.29-.258 2.481-.774 3.575a7.77 7.77 0 01-2.203 2.789A6.26 6.26 0 01141 22.049c-.64.226-1.308.34-2.004.34-.828 0-1.453-.164-1.875-.493-.414-.328-.629-.812-.644-1.453m.586-5.015c-.102-.633-.328-1.114-.68-1.442-.344-.336-.8-.504-1.371-.504-.89 0-1.664.485-2.32 1.454-.657.968-.985 2.132-.985 3.492 0 .718.156 1.265.469 1.64.32.375.781.563 1.383.563.648 0 1.238-.246 1.77-.738.538-.493.906-1.133 1.1-1.922l.634-2.543m-8.496 38.203c.015-1.5.336-2.77.96-3.809.626-1.047 1.735-2.105 3.329-3.176.242-.164.593-.39 1.054-.68 2.11-1.35 3.164-2.652 3.164-3.902 0-.742-.222-1.328-.668-1.757-.445-.43-1.054-.645-1.828-.645-.843 0-1.496.266-1.957.797-.453.523-.68 1.273-.68 2.25v.14h-3.093c0-1.921.516-3.402 1.547-4.44 1.031-1.04 2.5-1.56 4.406-1.56 1.727 0 3.105.473 4.137 1.419 1.031.937 1.547 2.187 1.547 3.75 0 1.117-.27 2.086-.809 2.906-.54.82-1.582 1.754-3.129 2.8-.328.227-.781.524-1.36.891-1.468.946-2.296 1.664-2.484 2.156h7.618v2.86h-11.754"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M195.281 13.693l-1.031 2.86h2.941l1.008-2.86h-2.918m0-7.218h2.59l-1.71 4.863h2.835l1.734-4.863h2.59l-1.734 4.863h3.316l-.867 2.355h-3.281l-.984 2.836h3.398l-.832 2.344h-3.41l-1.735 4.875h-2.59l1.735-4.875h-2.86l-1.746 4.875h-2.578l1.711-4.875H187.5l.89-2.344h3.305l1.008-2.836H189.2l.867-2.355h3.48l1.735-4.863m-5.203 42.046h3.223c.008.938.234 1.645.68 2.122.445.468 1.105.703 1.98.703.844 0 1.492-.219 1.945-.657.461-.445.692-1.082.692-1.91 0-.828-.27-1.453-.809-1.875-.531-.43-1.324-.644-2.379-.644-.055 0-.14.004-.258.011-.109.008-.191.012-.246.012v-2.32h.364c.968 0 1.683-.188 2.144-.563.469-.382.703-.964.703-1.746 0-.648-.199-1.16-.597-1.535-.391-.383-.926-.574-1.606-.574-.742 0-1.316.219-1.723.656-.406.438-.609 1.059-.609 1.863v.141h-3.164c.039-1.719.543-3.035 1.512-3.95.976-.921 2.351-1.382 4.125-1.382 1.68 0 3.011.41 3.996 1.23.984.82 1.476 1.926 1.476 3.317 0 .734-.168 1.379-.504 1.934-.336.554-.84 1.011-1.511 1.37.86.376 1.508.895 1.945 1.56.445.655.668 1.44.668 2.355 0 1.68-.55 3.011-1.652 3.996-1.102.984-2.606 1.476-4.512 1.476-1.883 0-3.336-.476-4.36-1.43-1.015-.96-1.523-2.324-1.523-4.09v-.07"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M254.46 21.451c.642-.086 1.13-.316 1.466-.691.336-.375.504-.875.504-1.5 0-.555-.16-1.012-.48-1.371-.313-.368-.81-.653-1.49-.856v4.418m-1.394-8.015V9.45c-.609.078-1.074.29-1.394.633-.32.336-.48.79-.48 1.36 0 .476.148.874.445 1.195.304.32.781.586 1.43.797m0 12.832v-2.25c-1.766-.11-3.087-.622-3.962-1.536s-1.312-2.234-1.312-3.96h3.14c.04.843.235 1.511.587 2.003.359.485.875.793 1.546.926V16.6c-1.812-.461-3.101-1.063-3.867-1.805-.765-.742-1.148-1.758-1.148-3.047 0-1.43.453-2.582 1.36-3.457.913-.875 2.132-1.332 3.655-1.371v-1.5h1.395v1.5c1.523.078 2.71.539 3.562 1.383.852.836 1.32 2.015 1.407 3.539h-3.188c-.055-.727-.23-1.281-.527-1.664-.29-.39-.707-.61-1.254-.657v4.266c1.93.602 3.289 1.29 4.078 2.063.79.773 1.184 1.793 1.184 3.058 0 1.492-.461 2.684-1.383 3.574-.914.891-2.207 1.41-3.88 1.559v2.227h-1.394m1.582 21.152v-7.184l-4.558 7.184h4.558m-.07 6.21v-3.62H247.5v-2.953l6.188-9.727h4.16v10.008h1.945v2.672h-1.945v3.62h-3.27"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M320.426 19.74c0 .524.176.965.527 1.324.352.352.785.528 1.3.528.5 0 .93-.18 1.29-.54.36-.366.539-.804.539-1.312 0-.5-.18-.926-.539-1.277a1.734 1.734 0 00-1.29-.54c-.515 0-.948.177-1.3.528-.351.344-.527.774-.527 1.29m-2.543 0c0-1.22.422-2.247 1.265-3.083.844-.836 1.88-1.254 3.106-1.254 1.203 0 2.226.426 3.07 1.278.852.843 1.278 1.863 1.278 3.058 0 1.203-.426 2.235-1.278 3.094-.851.852-1.875 1.277-3.07 1.277-1.227 0-2.262-.422-3.106-1.265-.843-.844-1.265-1.88-1.265-3.106m-6.809 4.371L321.082 6.85h1.887L312.96 24.11h-1.887m-1.031-12.89c0 .515.172.949.516 1.3.351.352.785.528 1.3.528.508 0 .938-.176 1.29-.528.359-.359.538-.792.538-1.3 0-.5-.18-.926-.539-1.278a1.734 1.734 0 00-1.289-.539c-.515 0-.949.176-1.3.528-.344.343-.516.773-.516 1.289m-2.543 0c0-1.219.422-2.25 1.266-3.094.843-.852 1.875-1.277 3.093-1.277 1.203 0 2.227.43 3.07 1.289.852.851 1.278 1.879 1.278 3.082 0 1.203-.426 2.23-1.277 3.082-.844.843-1.868 1.265-3.07 1.265-1.227 0-2.262-.418-3.106-1.254-.836-.835-1.254-1.867-1.254-3.093m3.352 37.898h3.28c.055.735.302 1.305.74 1.711.437.399 1.023.598 1.757.598.906 0 1.598-.266 2.074-.797.484-.531.727-1.293.727-2.285 0-.93-.246-1.66-.739-2.192-.492-.539-1.171-.808-2.039-.808-.484 0-.91.097-1.277.293-.367.195-.68.484-.938.867l-3.023-.176 1.09-9h9.644v2.836h-7.277l-.433 3.363a3.73 3.73 0 011.265-.644 5.346 5.346 0 011.594-.223c1.672 0 3.02.508 4.043 1.524 1.031 1.015 1.547 2.347 1.547 3.996 0 1.804-.567 3.246-1.7 4.324-1.132 1.07-2.652 1.605-4.558 1.605-1.734 0-3.117-.441-4.149-1.324-1.023-.89-1.566-2.113-1.628-3.668"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M373.137 6.521h2.953l5.637 6.575h-2.754l-4.348-4.348-4.371 4.348H367.5l5.637-6.575m-.985 41.778c0 .96.239 1.722.715 2.285.485.562 1.14.844 1.969.844.773 0 1.379-.274 1.816-.82.438-.547.657-1.31.657-2.286 0-.898-.227-1.597-.68-2.097-.453-.5-1.09-.75-1.91-.75-.805 0-1.434.25-1.887.75-.453.5-.68 1.191-.68 2.074m-.047-4.383c.383-.39.844-.684 1.383-.879a5.085 5.085 0 011.805-.305c1.64 0 2.953.5 3.937 1.5.993 1 1.489 2.332 1.489 3.997 0 1.765-.54 3.19-1.617 4.277-1.079 1.086-2.5 1.629-4.266 1.629-2.04 0-3.59-.703-4.652-2.11-1.055-1.406-1.582-3.464-1.582-6.175 0-2.914.566-5.141 1.699-6.68 1.133-1.547 2.765-2.32 4.898-2.32 1.485 0 2.68.386 3.586 1.16.914.773 1.414 1.82 1.5 3.14h-3.398c-.078-.539-.29-.945-.633-1.218-.344-.274-.824-.41-1.442-.41-.843 0-1.492.367-1.945 1.101-.453.727-.707 1.824-.762 3.293"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M432.855 16.096l-.89.644c-.36.25-.63.551-.809.903-.18.351-.27.746-.27 1.183 0 .664.227 1.223.68 1.676.454.453 1.02.68 1.7.68.5 0 .976-.102 1.43-.305.46-.211.886-.516 1.277-.914l-3.118-3.867m.938-3.692l.41-.293c.375-.257.652-.547.832-.867.18-.32.27-.687.27-1.101 0-.399-.125-.715-.375-.95-.243-.234-.575-.351-.996-.351-.43 0-.77.12-1.02.363-.25.234-.375.555-.375.961 0 .219.059.457.176.715.125.258.3.531.527.82l.551.703m-2.637 1.559l-.68-.89c-.351-.47-.605-.907-.761-1.313a3.825 3.825 0 01-.223-1.301c0-1.25.399-2.242 1.195-2.977.805-.742 1.895-1.113 3.27-1.113 1.32 0 2.363.34 3.129 1.02.766.68 1.148 1.597 1.148 2.754 0 .875-.226 1.66-.68 2.355-.445.688-1.148 1.336-2.109 1.945l2.473 3.047c.234-.383.418-.812.55-1.289.141-.476.239-1.008.294-1.594h3.047a10.15 10.15 0 01-.633 2.825 8.736 8.736 0 01-1.383 2.379l3.14 3.82h-3.984l-1.172-1.442a7.323 7.323 0 01-2.273 1.442c-.82.32-1.68.48-2.578.48-1.594 0-2.899-.472-3.914-1.418-1.008-.945-1.512-2.152-1.512-3.62 0-1.094.281-2.036.844-2.825.562-.789 1.5-1.55 2.812-2.285m3.504 39.668h-3.504c.125-2.29.676-4.559 1.653-6.809.984-2.25 2.386-4.46 4.207-6.633h-8.25V37.33h11.894v2.52c-1.844 2.03-3.262 4.18-4.254 6.445-.984 2.266-1.566 4.71-1.746 7.336"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M493.5 13.213l-2.063 2.906-1.992-1.394 2.25-2.825-3.28-.914.76-2.379 3.153 1.125V6.37h2.32v3.363l3.153-1.101.785 2.379-3.281.89 2.226 2.801-2.039 1.465-1.992-2.953m-2.625 35.543c0 .82.227 1.453.68 1.898.46.446 1.117.668 1.968.668.813 0 1.45-.226 1.91-.68.47-.453.704-1.081.704-1.886 0-.774-.239-1.395-.715-1.863-.477-.47-1.11-.704-1.899-.704-.789 0-1.43.239-1.921.715-.485.477-.727 1.094-.727 1.852m.27-7.195c0 .648.203 1.148.609 1.5.406.343.988.515 1.746.515s1.34-.176 1.746-.527c.414-.352.621-.848.621-1.488 0-.625-.21-1.118-.633-1.477-.422-.36-1-.54-1.734-.54-.719 0-1.293.185-1.723.552-.422.367-.632.855-.632 1.465m-1.207 3.257c-.704-.39-1.211-.847-1.524-1.37-.312-.524-.469-1.192-.469-2.005 0-1.437.493-2.566 1.477-3.386.984-.82 2.344-1.23 4.078-1.23 1.75 0 3.117.41 4.102 1.23.992.812 1.488 1.941 1.488 3.386 0 .774-.168 1.446-.504 2.016-.336.562-.84 1.016-1.512 1.36.82.382 1.438.913 1.852 1.593.414.672.62 1.492.62 2.461 0 1.633-.538 2.914-1.616 3.844-1.07.93-2.547 1.394-4.43 1.394-1.906 0-3.387-.46-4.441-1.382-1.055-.922-1.582-2.208-1.582-3.856 0-.96.195-1.766.586-2.414.398-.656 1.023-1.203 1.875-1.64"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M557.86 6.37c-1.079 1.765-1.88 3.562-2.403 5.39a20.803 20.803 0 00-.785 5.754c0 2 .262 3.914.785 5.742.523 1.828 1.324 3.625 2.402 5.39h-2.472c-1.367-1.867-2.407-3.742-3.117-5.625-.704-1.89-1.055-3.726-1.055-5.507 0-1.782.351-3.618 1.055-5.508.71-1.89 1.75-3.77 3.117-5.637h2.472m-1.793 36.317c0-.961-.242-1.72-.726-2.274-.477-.562-1.13-.844-1.957-.844-.781 0-1.39.27-1.828.809-.43.539-.645 1.293-.645 2.262 0 .906.227 1.613.68 2.12.453.509 1.09.762 1.91.762.805 0 1.434-.25 1.887-.75.453-.5.68-1.195.68-2.085m.058 4.37a3.77 3.77 0 01-1.383.88c-.531.195-1.129.293-1.793.293-1.648 0-2.969-.497-3.96-1.489-.993-.992-1.489-2.32-1.489-3.984 0-1.766.54-3.192 1.617-4.277 1.078-1.086 2.5-1.63 4.266-1.63 2.047 0 3.601.708 4.664 2.122 1.07 1.406 1.605 3.46 1.605 6.164 0 2.906-.57 5.133-1.71 6.68-1.141 1.546-2.782 2.32-4.922 2.32-1.477 0-2.668-.383-3.575-1.149-.906-.773-1.402-1.824-1.488-3.152l3.387.012c.078.539.289.941.633 1.207.343.265.828.398 1.453.398.843 0 1.488-.367 1.933-1.101.446-.735.7-1.832.762-3.293"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M609.375 6.37h2.496c1.36 1.859 2.39 3.734 3.094 5.624.703 1.883 1.055 3.723 1.055 5.52 0 1.789-.352 3.629-1.055 5.52-.703 1.89-1.735 3.76-3.094 5.612h-2.496c1.086-1.773 1.89-3.574 2.414-5.402.531-1.836.797-3.746.797-5.73 0-1.993-.266-3.903-.797-5.73-.523-1.829-1.328-3.634-2.414-5.415m1.605 39.106c0 2.039.204 3.52.61 4.441.414.922 1.07 1.383 1.969 1.383.898 0 1.554-.465 1.968-1.395.414-.93.621-2.406.621-4.43 0-2.03-.207-3.507-.62-4.43-.415-.92-1.071-1.382-1.97-1.382-.898 0-1.554.461-1.968 1.383-.406.914-.61 2.39-.61 4.43m-3.48 0c0-2.883.5-5.04 1.5-6.47 1.008-1.437 2.527-2.155 4.559-2.155 2.023 0 3.539.722 4.546 2.168 1.016 1.437 1.524 3.597 1.524 6.48 0 2.883-.504 5.035-1.512 6.457-1 1.422-2.52 2.133-4.558 2.133-2.032 0-3.551-.715-4.559-2.145-1-1.43-1.5-3.586-1.5-6.468"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M667.5 26.9h12v2.391h-12v-2.39m2.707 21.949v-3.211h6.586v3.21h-6.586"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M733.336 9.322h2.367V15.3h5.836v2.332h-5.836v6h-2.367v-6H727.5v-2.332h5.836V9.322M727.5 47.818h14.04v2.332H727.5v-2.332m0-5.039h14.04v2.332H727.5V42.78"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M11.07 95.602v-9.454H7.656v-2.054h9.172v2.054h-3.39v9.454H11.07m11.79-1.055a2.853 2.853 0 01-1.126 1.016c-.463.229-1.002.343-1.617.343-.823 0-1.458-.234-1.906-.703-.443-.469-.664-1.135-.664-2 0-.802.221-1.414.664-1.836.448-.422 1.185-.71 2.21-.867.235-.036.543-.078.923-.125.963-.125 1.445-.404 1.445-.836 0-.344-.107-.588-.32-.734-.214-.151-.57-.227-1.07-.227-.459 0-.81.091-1.055.274-.245.182-.367.442-.367.78v.126h-2.125v-.156c0-.87.307-1.553.921-2.047.615-.5 1.464-.75 2.547-.75 1.188 0 2.097.205 2.727.617.635.411.953 1.005.953 1.781v4.828c0 .354.036.62.11.797a.766.766 0 00.367.39v.384h-2.368a1.982 1.982 0 01-.18-.485 2.8 2.8 0 01-.07-.57m-.039-3.125c-.37.172-.797.31-1.28.414-.48.104-.728.159-.743.164-.401.115-.682.258-.844.43-.156.172-.234.409-.234.71 0 .313.101.563.304.75.204.183.477.274.82.274.615 0 1.097-.172 1.446-.516.354-.349.531-.822.531-1.421v-.805m4.22-7.328h2.21v4.07a2.802 2.802 0 011.055-1c.427-.23.911-.344 1.453-.344 1.026 0 1.864.425 2.515 1.274.651.844.977 1.942.977 3.297 0 1.343-.326 2.43-.977 3.257-.65.829-1.5 1.243-2.546 1.243-.547 0-1.024-.115-1.43-.344-.401-.23-.766-.594-1.094-1.094v1.149H27.04V84.094m5.953 7.203c0-.781-.164-1.393-.492-1.836-.328-.448-.779-.672-1.352-.672-.604 0-1.072.219-1.406.656-.328.433-.492 1.05-.492 1.852 0 .864.156 1.52.469 1.969.317.448.778.672 1.383.671.614 0 1.083-.223 1.406-.671.323-.453.484-1.11.484-1.97"
  fontFamily="Swis721 BT"
  fontSize="16"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M789.766 44.37h2.804c.662 0 1.144-.12 1.446-.36.302-.24.453-.617.453-1.133 0-.537-.149-.922-.446-1.156-.296-.24-.786-.36-1.468-.36h-2.79v3.008m0-4.976h2.704c.583 0 1.01-.1 1.281-.297.27-.203.406-.521.406-.953 0-.422-.133-.727-.398-.914-.26-.193-.696-.29-1.305-.29h-2.687v2.454m-2.266 7.054V34.94h5.422c1.177 0 2.073.25 2.687.75.62.495.93 1.217.93 2.165 0 .583-.115 1.07-.344 1.46-.229.391-.573.693-1.03.907.593.24 1.036.586 1.327 1.039.297.448.445 1.008.446 1.68 0 1.12-.365 1.984-1.094 2.593-.73.61-1.763.914-3.102.914H787.5m15.953-1.054a2.853 2.853 0 01-1.125 1.015c-.463.23-1.002.344-1.617.344-.823 0-1.458-.234-1.906-.703-.443-.469-.664-1.136-.664-2 0-.802.221-1.414.664-1.836.448-.422 1.185-.711 2.21-.867.235-.037.542-.078.923-.125.963-.125 1.445-.404 1.445-.836 0-.344-.107-.589-.32-.735-.214-.15-.57-.226-1.07-.226-.46 0-.81.091-1.056.273-.244.183-.367.443-.367.782v.125h-2.125v-.157c0-.87.308-1.552.922-2.047.615-.5 1.464-.75 2.547-.75 1.188 0 2.096.206 2.727.618.635.411.953 1.005.953 1.78v4.829c0 .354.036.62.11.797a.766.766 0 00.366.39v.383h-2.367a1.981 1.981 0 01-.18-.484 2.8 2.8 0 01-.07-.57m-.039-3.125c-.37.171-.797.31-1.281.414-.48.104-.727.158-.742.164-.401.114-.683.258-.844.43-.156.171-.235.408-.235.71 0 .313.102.563.305.75.203.183.477.274.82.274.615 0 1.097-.172 1.446-.516.354-.349.531-.823.531-1.422v-.804m9.305.976h2.242c-.094 1.078-.487 1.93-1.18 2.555-.692.625-1.583.937-2.672.937-1.234 0-2.203-.4-2.906-1.203-.698-.807-1.047-1.922-1.047-3.344 0-1.416.357-2.526 1.07-3.328.72-.807 1.706-1.21 2.962-1.21 1.098 0 1.979.291 2.64.874.667.584 1.04 1.396 1.117 2.438h-2.258c-.062-.453-.22-.8-.476-1.04-.255-.239-.591-.359-1.008-.359-.562 0-.984.222-1.265.665-.277.442-.415 1.106-.415 1.992 0 .817.144 1.448.43 1.89.292.438.708.657 1.25.657.422 0 .76-.128 1.016-.383.255-.255.422-.636.5-1.14m3.726 3.202V34.94h2.211v6.04l2.703-3.024h2.735l-2.961 3.149 3.14 5.343h-2.726l-2.031-3.617-.86.93v2.687h-2.21m8.35-2.765h2.266c.021.432.178.755.47.968.29.209.728.313 1.312.313.442 0 .784-.073 1.023-.219.245-.15.367-.362.367-.633 0-.385-.453-.674-1.359-.867-.37-.078-.664-.146-.883-.203-1.104-.281-1.872-.615-2.304-1-.428-.385-.641-.906-.641-1.562 0-.87.312-1.558.937-2.063.63-.51 1.482-.766 2.555-.766 1.135 0 2.026.253 2.672.758.651.505.997 1.216 1.039 2.133h-2.21c-.017-.36-.155-.638-.415-.836-.255-.198-.612-.297-1.07-.297-.433 0-.756.065-.97.196a.645.645 0 00-.312.585c0 .339.566.638 1.696.899.26.057.466.104.617.14 1.13.266 1.901.586 2.312.961.417.375.625.904.625 1.586 0 .964-.34 1.698-1.023 2.204-.677.505-1.664.757-2.96.757-1.173 0-2.09-.263-2.75-.789-.662-.526-.993-1.25-.993-2.172v-.093m15.226-1.43c0-.854-.161-1.505-.484-1.953-.323-.453-.792-.68-1.406-.68-.604 0-1.065.224-1.383.672-.313.448-.469 1.102-.469 1.961 0 .802.164 1.422.492 1.86.334.437.803.656 1.407.656.573 0 1.023-.224 1.351-.672.328-.448.492-1.063.492-1.844m-5.953 7.602V37.955h2.164v1.149c.328-.5.693-.865 1.094-1.094.406-.23.883-.344 1.43-.344 1.047 0 1.896.414 2.547 1.242.65.823.976 1.906.976 3.25 0 1.36-.325 2.464-.976 3.313-.651.843-1.49 1.265-2.516 1.265a3.024 3.024 0 01-1.453-.343 2.885 2.885 0 01-1.055-1v4.46h-2.21m14.632-4.46a2.853 2.853 0 01-1.125 1.015c-.463.23-1.002.344-1.617.344-.823 0-1.458-.234-1.906-.703-.443-.469-.664-1.136-.664-2 0-.802.221-1.414.664-1.836.448-.422 1.185-.711 2.21-.867.235-.037.542-.078.923-.125.963-.125 1.445-.404 1.445-.836 0-.344-.107-.589-.32-.735-.214-.15-.57-.226-1.07-.226-.46 0-.81.091-1.056.273-.244.183-.367.443-.367.782v.125h-2.125v-.157c0-.87.308-1.552.922-2.047.615-.5 1.464-.75 2.547-.75 1.188 0 2.096.206 2.727.618.635.411.953 1.005.953 1.78v4.829c0 .354.036.62.11.797a.766.766 0 00.366.39v.383h-2.367a1.981 1.981 0 01-.18-.484 2.8 2.8 0 01-.07-.57m-.039-3.125c-.37.171-.797.31-1.281.414-.48.104-.727.158-.742.164-.401.114-.683.258-.844.43-.156.171-.235.408-.235.71 0 .313.102.563.305.75.203.183.477.274.82.274.615 0 1.097-.172 1.446-.516.354-.349.531-.823.531-1.422v-.804m9.305.976h2.242c-.094 1.078-.487 1.93-1.18 2.555-.692.625-1.583.937-2.672.937-1.234 0-2.203-.4-2.906-1.203-.698-.807-1.047-1.922-1.047-3.344 0-1.416.357-2.526 1.07-3.328.72-.807 1.706-1.21 2.962-1.21 1.098 0 1.979.291 2.64.874.667.584 1.04 1.396 1.117 2.438h-2.258c-.062-.453-.22-.8-.476-1.04-.255-.239-.591-.359-1.008-.359-.562 0-.984.222-1.265.665-.277.442-.415 1.106-.415 1.992 0 .817.144 1.448.43 1.89.292.438.708.657 1.25.657.422 0 .76-.128 1.016-.383.255-.255.422-.636.5-1.14m8.914.624h2.265c-.229.896-.692 1.6-1.39 2.11-.693.505-1.54.757-2.54.757-1.228 0-2.202-.411-2.921-1.234-.719-.828-1.078-1.948-1.078-3.36 0-1.39.354-2.486 1.062-3.288.709-.803 1.677-1.204 2.907-1.204 1.302 0 2.307.396 3.015 1.188.708.786 1.063 1.909 1.063 3.367 0 .162-.003.284-.008.367 0 .078-.005.154-.016.227h-5.672c.032.666.193 1.17.485 1.508.297.338.721.507 1.273.507.39 0 .711-.075.961-.226.25-.156.448-.396.594-.719m-3.313-2.562h3.344c-.02-.573-.174-1.008-.46-1.305-.282-.302-.688-.453-1.22-.453-.494 0-.885.15-1.172.453-.28.302-.445.737-.492 1.305"
  fontFamily="Swis721 BT"
  fontSize="16"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  fill="none"
  fillOpacity="0.75"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="3"
  d="M840 17.646h-42.974"
  ></path>
  <path
  fill="#49fb35"
  fillOpacity="1"
  fillRule="evenodd"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M802.5 25.146v-15l-15 7.5 15 7.5z"
  ></path>
  <g
  fillRule="evenodd"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  transform="translate(0 7.5)"
  >
  <path
    fill="none"
    fillOpacity="0.75"
    stroke="#49fb35"
    strokeDasharray="none"
    strokeMiterlimit="4"
    strokeWidth="3"
    d="M82.5 75H54.02"
  ></path>
  <path
    fill="#49fb35"
    fillOpacity="1"
    stroke="none"
    strokeWidth="1"
    d="M60 82.5v-15L45 75l15 7.5z"
  ></path>
  <path
    fill="none"
    fillOpacity="0.75"
    stroke="#49fb35"
    strokeDasharray="none"
    strokeMiterlimit="4"
    strokeWidth="3"
    d="M45 67.5v15"
  ></path>
  </g>
  <g
  fillRule="evenodd"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  transform="rotate(180 63.75 86.25)"
  >
  <path
    fill="none"
    fillOpacity="0.75"
    stroke="#49fb35"
    strokeDasharray="none"
    strokeMiterlimit="4"
    strokeWidth="3"
    d="M82.5 75H54.02"
  ></path>
  <path
    fill="#49fb35"
    fillOpacity="1"
    stroke="none"
    strokeWidth="1"
    d="M60 82.5v-15L45 75l15 7.5z"
  ></path>
  <path
    fill="none"
    fillOpacity="0.75"
    stroke="#49fb35"
    strokeDasharray="none"
    strokeMiterlimit="4"
    strokeWidth="3"
    d="M45 67.5v15"
  ></path>
  </g>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M107.063 80.56l-1.829-1.78 1.946-2.016 1.875 1.828a6.27 6.27 0 00.574-1.606c.133-.601.2-1.257.2-1.968 0-1.899-.427-3.372-1.278-4.418-.852-1.055-2.043-1.582-3.574-1.582-1.516 0-2.696.523-3.54 1.57-.843 1.047-1.265 2.523-1.265 4.43 0 1.898.422 3.375 1.266 4.43.843 1.046 2.023 1.57 3.539 1.57.39 0 .757-.04 1.101-.118.352-.078.68-.191.984-.34m2.497 2.356c-.586.39-1.27.688-2.051.89a9.947 9.947 0 01-2.531.305c-2.579 0-4.63-.82-6.153-2.46-1.515-1.641-2.273-3.852-2.273-6.633 0-2.79.758-5 2.273-6.633 1.524-1.64 3.574-2.461 6.153-2.461 2.578 0 4.628.82 6.152 2.46 1.531 1.641 2.297 3.852 2.297 6.634 0 1.218-.156 2.336-.469 3.351a7.922 7.922 0 01-1.383 2.649l1.875 1.793-1.922 2.015-1.968-1.91"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M158.941 83.63l-4.945-17.26h3.68l2.953 12.175 2.496-12.176h3.785l2.496 12.176 2.953-12.176h3.645l-4.934 17.262h-3.386l-2.672-13.219-2.684 13.219h-3.387"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M218.525 83.63V66.37h12.528v3h-9.024v3.679h8.25v2.953h-8.25v4.441h9.446v3.188h-12.95"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M281.438 73.916h4.171c.907 0 1.57-.184 1.993-.55.43-.368.644-.946.644-1.735 0-.75-.207-1.317-.621-1.7-.414-.39-1.031-.585-1.852-.585h-4.336v4.57m-3.55 9.715V66.369h8.367c1.883 0 3.277.403 4.183 1.207.907.805 1.36 2.035 1.36 3.692 0 1.054-.223 1.933-.668 2.636-.438.703-1.07 1.184-1.899 1.442.75.265 1.282.672 1.594 1.218.32.547.504 1.399.551 2.555l.07 2.04v.07c.024 1.03.246 1.656.668 1.875v.527h-3.89a3.4 3.4 0 01-.293-.89 9.28 9.28 0 01-.118-1.278l-.046-1.817c-.04-1.07-.243-1.792-.61-2.167-.36-.375-1.011-.563-1.957-.563h-3.762v6.715h-3.55"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M343.242 83.63V69.452h-5.12V66.37h13.757v3.082h-5.086v14.18h-3.55"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M407.068 83.63h-3.55v-6.433l-6.27-10.828h4.348l3.691 7.442 3.41-7.442h4.055l-5.684 10.828v6.434"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M458.086 66.105h3.586v10.829c0 1.336.265 2.312.797 2.93.531.609 1.375.913 2.531.913 1.172 0 2.023-.304 2.555-.914.539-.61.808-1.586.808-2.93V66.106h3.551V77.32c0 2.118-.594 3.743-1.781 4.875-1.18 1.133-2.883 1.7-5.11 1.7-2.242 0-3.96-.563-5.156-1.688-1.187-1.133-1.781-2.762-1.781-4.887V66.105"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M523.225 83.63V66.37h3.55v17.26h-3.55"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M580.184 75c0 1.898.421 3.375 1.265 4.43.844 1.047 2.024 1.57 3.54 1.57 1.53 0 2.722-.523 3.573-1.57.852-1.055 1.278-2.532 1.278-4.43 0-1.898-.426-3.371-1.278-4.418-.851-1.055-2.042-1.582-3.574-1.582-1.515 0-2.695.523-3.539 1.57-.844 1.047-1.265 2.524-1.265 4.43m-3.621 0c0-2.79.757-5 2.273-6.633 1.523-1.64 3.574-2.46 6.152-2.46 2.578 0 4.63.82 6.153 2.46 1.53 1.64 2.296 3.852 2.297 6.633 0 2.781-.766 4.992-2.297 6.633-1.524 1.64-3.575 2.46-6.153 2.46-2.578 0-4.629-.82-6.152-2.46-1.516-1.64-2.274-3.852-2.274-6.633"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M641.977 74.361h3.433c.93 0 1.606-.195 2.028-.586.421-.398.632-1.035.632-1.91 0-.82-.207-1.441-.62-1.863-.415-.422-1.032-.633-1.852-.633h-3.621v4.992m-.024 3.13v6.14h-3.55V66.369h7.675c1.813 0 3.184.473 4.113 1.418.938.938 1.407 2.317 1.407 4.137 0 1.781-.457 3.156-1.371 4.125-.915.96-2.22 1.441-3.914 1.441h-4.36"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M709.248 63.92v2.45c-.07 0-.168-.005-.293-.013a4.981 4.981 0 00-.258-.011c-.789 0-1.324.152-1.605.457-.274.297-.41.93-.41 1.898v2.813c0 1.156-.176 1.976-.528 2.46-.351.485-.984.833-1.898 1.044.914.21 1.547.554 1.898 1.03.352.477.528 1.294.528 2.45v2.824c0 .961.136 1.59.41 1.887.273.297.808.445 1.605.445.047 0 .133-.004.258-.011.125-.008.223-.012.293-.012v2.45c-.11 0-.262.003-.457.01-.195.009-.34.013-.434.013-.78 0-1.433-.047-1.957-.141-.523-.094-.968-.238-1.336-.434a2.226 2.226 0 01-.949-1.078c-.18-.445-.27-1.222-.27-2.332v-2.953c0-1.07-.199-1.828-.597-2.273-.398-.454-1.07-.68-2.016-.68-.046 0-.125.004-.234.012-.11.007-.191.011-.246.011v-2.449c.055 0 .137.004.246.012.11.008.188.012.234.012.938 0 1.606-.227 2.004-.68.407-.453.61-1.219.61-2.297v-2.93c0-1.117.09-1.902.27-2.355.187-.453.503-.813.948-1.078.368-.196.813-.34 1.336-.434.524-.094 1.176-.14 1.957-.14.094 0 .239.003.434.011s.348.012.457.012m-6.152 30.047h5.918v2.496h-2.754v17.379h2.754v2.496h-5.918V93.967"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M760.752 63.908h.797c.86 0 1.55.047 2.074.14.523.095.961.243 1.313.446.445.25.757.61.937 1.078.188.461.281 1.235.281 2.32v2.954c0 1.07.2 1.832.598 2.285.398.445 1.07.668 2.016.668.046 0 .125-.004.234-.012.11-.008.191-.012.246-.012v2.45h-.434c-.976 0-1.664.218-2.062.656-.398.437-.598 1.195-.598 2.273v2.953c0 1.118-.093 1.903-.28 2.356-.18.453-.493.805-.938 1.055-.368.195-.813.34-1.336.433-.524.094-1.176.14-1.957.14-.094 0-.239-.003-.434-.01a12.16 12.16 0 00-.457-.013V83.62c.07 0 .168.004.293.012.125.008.21.012.258.012.789 0 1.32-.153 1.593-.457.282-.297.422-.922.422-1.875V78.51c0-1.172.176-1.996.528-2.473.351-.484.984-.828 1.898-1.031-.914-.211-1.547-.559-1.898-1.043-.352-.484-.528-1.305-.528-2.461v-2.836c0-.953-.14-1.578-.422-1.875-.273-.305-.804-.457-1.593-.457-.047 0-.133.004-.258.012a4.973 4.973 0 01-.293.011v-2.449m6.258 30.047v22.371h-5.93v-2.496h2.766V96.451h-2.766v-2.496h5.93"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M823.799 62.877h2.414v24h-2.414v-24m3.305 50.566L821.29 93.51h1.582l5.836 19.933h-1.605"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <g
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  transform="translate(0 3.75)"
  >
  <text
    x="52.152"
    y="139.305"
    style={{
      WebkitTextAlign: "center",
      textAlign: "center",
      lineHeight: "125%",
    }}
    fontFamily="Swis721 BT"
    fontSize="16"
    fontStretch="normal"
    fontStyle="normal"
    fontVariant="normal"
    fontWeight="bold"
    textAnchor="middle"
    writingMode="lr-tb"
  >
    <tspan x="52.152" y="139.305">
      Caps Lock
    </tspan>
  </text>
  <path
    fillRule="evenodd"
    d="M26.25 142.5L15 157.5h7.5v7.5H30v-7.5h7.5l-11.25-15zm-1.031 4.219h2.031l3.125 8.625H28.5l-.594-1.781h-3.343l-.563 1.78h-1.875l3.094-8.624zm1.031 1.719l-1.219 3.656h2.407l-1.188-3.656z"
  ></path>
  </g>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M119.97 129.826l-2.39 7.348h4.793l-2.402-7.348m-2.063-3.457h4.102l6.222 17.262h-3.726l-1.172-3.55h-6.691l-1.137 3.55h-3.738l6.14-17.262"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M172.98 138.293h3.504c.133.945.52 1.648 1.16 2.11.641.452 1.567.679 2.778.679 1.031 0 1.808-.184 2.332-.55.523-.368.785-.91.785-1.63 0-1.047-1.504-1.914-4.512-2.601a11.302 11.302 0 01-.469-.105c-1.609-.352-2.757-.747-3.445-1.184a3.819 3.819 0 01-1.394-1.57c-.32-.665-.48-1.446-.48-2.344 0-1.68.57-2.965 1.71-3.856 1.14-.898 2.79-1.347 4.946-1.347 2.015 0 3.59.476 4.722 1.43 1.14.952 1.742 2.296 1.805 4.03h-3.41c-.063-.835-.383-1.472-.961-1.91-.578-.437-1.403-.656-2.473-.656-.93 0-1.648.184-2.156.55-.5.36-.75.876-.75 1.548 0 .914.98 1.597 2.941 2.05l1.242.293c1.258.32 2.149.57 2.672.75.532.18.993.38 1.383.598.703.39 1.23.91 1.582 1.559.352.64.528 1.41.528 2.308 0 1.797-.606 3.192-1.817 4.184-1.21.984-2.918 1.476-5.121 1.476-2.172 0-3.875-.503-5.11-1.511-1.234-1.008-1.898-2.442-1.992-4.301"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M236.162 140.514h2.848c1.648 0 2.84-.43 3.574-1.29.742-.867 1.113-2.269 1.113-4.206 0-1.93-.344-3.348-1.031-4.254-.688-.907-1.762-1.36-3.223-1.36h-3.28v11.11m-3.481 3.117v-17.262h6.761c2.649 0 4.621.715 5.918 2.145 1.305 1.43 1.957 3.597 1.957 6.504 0 1.578-.242 2.968-.726 4.171-.477 1.204-1.172 2.172-2.086 2.907a6.513 6.513 0 01-2.344 1.183c-.875.235-2.101.352-3.68.352h-5.8"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M293.977 143.63v-17.26h12.046v3h-8.543v3.913h7.489v3h-7.489v7.348h-3.503"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M365.18 141.574c-.641.867-1.371 1.504-2.192 1.91-.812.407-1.77.61-2.87.61-2.415 0-4.372-.836-5.872-2.508-1.492-1.68-2.238-3.883-2.238-6.61 0-2.75.746-4.949 2.238-6.597 1.492-1.649 3.48-2.473 5.965-2.473 2.164 0 3.93.52 5.297 1.559 1.367 1.031 2.18 2.453 2.437 4.265h-3.62c-.22-.898-.669-1.582-1.348-2.05-.672-.47-1.551-.703-2.637-.703-1.445 0-2.582.53-3.41 1.593-.82 1.055-1.23 2.516-1.23 4.383 0 1.875.429 3.344 1.288 4.406.86 1.063 2.04 1.594 3.54 1.594 1.124 0 2.066-.332 2.824-.996.757-.664 1.226-1.574 1.406-2.73h-3.914v-2.954h7.148v9.34h-2.379l-.433-2.039"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M412.863 143.63v-17.26h3.575v6.433h7.125v-6.434h3.574v17.262h-3.575v-7.652h-7.125v7.652h-3.574"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M474.48 136.957h3.434v2.086c0 .602.18 1.062.54 1.383.358.312.874.469 1.546.469.734 0 1.246-.192 1.535-.575.29-.382.434-1.101.434-2.156V126.13h3.55v12.2c0 1.093-.066 1.898-.199 2.413a3.635 3.635 0 01-.632 1.348c-.454.578-1.075 1.02-1.864 1.324-.789.305-1.715.457-2.777.457-.977 0-1.84-.133-2.59-.398-.75-.266-1.375-.66-1.875-1.184a3.772 3.772 0 01-.855-1.406c-.164-.524-.247-1.383-.247-2.578v-1.348"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M532.324 143.63v-17.26h3.551v7.089l6.738-7.09h4.442l-6.89 6.985 7.51 10.277h-4.335l-5.625-7.899-1.84 1.829v6.07h-3.55"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M594.012 143.63v-17.26h3.55v14.073h8.426v3.188h-11.976"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M143.15 203.63v-3l9.387-11.132h-9.2v-3.129h13.513v3l-9.41 11.145h9.199v3.117H143.15"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M202.371 203.63l5.426-8.812-5.426-8.449h4.102l3.527 6.035 3.504-6.035h4.125l-5.426 8.426 5.426 8.836h-4.102L210 197.654l-3.527 5.977h-4.102"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M277.875 197.684c-.133 1.96-.89 3.52-2.273 4.675-1.375 1.157-3.172 1.735-5.391 1.735-2.555 0-4.543-.797-5.965-2.39-1.414-1.595-2.121-3.829-2.121-6.704 0-2.937.723-5.187 2.168-6.75 1.445-1.562 3.523-2.344 6.234-2.344 2.203 0 3.942.54 5.215 1.617 1.281 1.07 1.985 2.586 2.11 4.547h-3.504c-.149-.976-.547-1.718-1.196-2.226-.648-.516-1.523-.774-2.625-.774-1.562 0-2.75.504-3.562 1.512-.813 1.008-1.219 2.48-1.219 4.418 0 1.875.402 3.324 1.207 4.348.813 1.023 1.965 1.535 3.457 1.535 1.078 0 1.961-.274 2.649-.82.687-.555 1.132-1.348 1.336-2.38h3.48"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M328.336 203.63l-5.953-17.26h3.937l3.668 12.913 3.739-12.914h3.89l-5.883 17.262h-3.398"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M386.32 200.514h4.207c.993 0 1.715-.18 2.168-.54.453-.359.68-.925.68-1.699 0-.804-.223-1.382-.668-1.734-.445-.36-1.18-.539-2.203-.54h-4.184v4.513m0-7.465h4.055c.875 0 1.516-.149 1.922-.445.406-.305.61-.782.61-1.43 0-.633-.2-1.09-.598-1.371-.391-.29-1.043-.434-1.957-.434h-4.032v3.68m-3.398 10.582v-17.262h8.133c1.765 0 3.109.375 4.03 1.125.93.742 1.395 1.824 1.395 3.246 0 .875-.171 1.606-.515 2.192-.344.586-.86 1.039-1.547 1.359.89.36 1.555.879 1.992 1.559.445.671.668 1.511.668 2.52 0 1.679-.547 2.976-1.64 3.89-1.094.914-2.645 1.37-4.653 1.37h-7.863"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M442.887 203.63v-17.26h3.715l7.007 11.859v-11.86h3.504v17.262h-3.668l-7.054-11.86v11.86h-3.504"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M501.328 203.63v-17.26h5.25l3.434 13.136 3.386-13.137h5.274v17.262h-3.328v-13.922l-3.504 13.922h-3.633l-3.55-13.922v13.922h-3.329"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M658.225 134.654v-3.55h3.55v3.55h-3.55m0 8.977v-3.527h3.55v3.527h-3.55m.023 21.023v-3.55h3.527v3.55h-3.527m0 13.032v-1.372c.656-.187 1.14-.476 1.453-.867.313-.39.469-.898.469-1.523v-.293h-1.945v-3.527h3.55v3.386c0 1.172-.296 2.11-.89 2.813-.594.71-1.473 1.172-2.637 1.383"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M720.785 126.78h2.25v6.55h-2.25v-6.55m-3.82 0h2.25v6.55h-2.25v-6.55m1.922 30h2.25v6.55h-2.25v-6.55"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M772.5 140.61v-11.508h8.352v2h-6.016v2.453h5.5v1.968h-5.5v2.961h6.297v2.125H772.5m10.242 0v-8.492h2.227v1.008a3.059 3.059 0 011.125-.922 3.286 3.286 0 011.445-.312c.938 0 1.638.244 2.102.734.468.484.703 1.216.703 2.195v5.79h-2.274v-5.133c0-.61-.104-1.045-.312-1.305-.203-.26-.537-.39-1-.39-.537 0-.961.16-1.274.484-.312.317-.468.752-.468 1.304v5.04h-2.274m13.336.062c-.208.005-.458.013-.75.023a13.7 13.7 0 01-.547.024c-.87 0-1.466-.162-1.789-.485-.318-.328-.476-.971-.476-1.93v-4.593h-1.125v-1.594h1.125v-2.32h2.25v2.32h1.312v1.594h-1.312v4.703c0 .224.05.372.148.445.099.068.302.102.61.102h.554v1.71m6.555-2.64h2.265c-.229.896-.692 1.6-1.39 2.11-.693.505-1.54.757-2.54.757-1.228 0-2.202-.411-2.921-1.234-.719-.828-1.078-1.948-1.078-3.36 0-1.39.354-2.486 1.062-3.288.709-.802 1.677-1.203 2.907-1.203 1.302 0 2.307.395 3.015 1.187.708.786 1.063 1.909 1.063 3.367 0 .162-.003.284-.008.367 0 .078-.005.154-.016.227h-5.672c.032.667.193 1.17.485 1.508.297.338.721.508 1.273.508.39 0 .711-.076.961-.227.25-.156.448-.396.594-.719m-3.313-2.562h3.344c-.02-.573-.174-1.008-.46-1.305-.282-.302-.688-.453-1.22-.453-.494 0-.885.151-1.172.453-.28.302-.445.737-.492 1.305m7.203 5.14v-8.492h2.11v1.453c.297-.583.643-1.01 1.039-1.28.396-.277.867-.415 1.414-.415.088 0 .156.003.203.008.052 0 .094.002.125.008l.008 2.304h-.758c-.62 0-1.086.162-1.398.485-.313.323-.47.802-.47 1.437v4.492h-2.273"
  fontFamily="Swis721 BT"
  fontSize="16"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  fill="#49fb35"
  fillOpacity="1"
  fillRule="evenodd"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M787.5 172.5v-15l-15 7.5 15 7.5z"
  ></path>
  <path
  fill="none"
  fillOpacity="0.75"
  fillRule="evenodd"
  stroke="#49fb35"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeMiterlimit="4"
  strokeOpacity="1"
  strokeWidth="3"
  d="M810 150v15h-30"
  ></path>
  <g
  fillOpacity="1"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  >
  <text
    style={{
      WebkitTextAlign: "center",
      textAlign: "center",
      lineHeight: "125%",
    }}
    x="31.813"
    y="201.195"
    fill="#49fb35"
    stroke="none"
    strokeWidth="1"
    fontFamily="Swis721 BT"
    fontSize="16"
    fontStretch="normal"
    fontStyle="normal"
    fontVariant="normal"
    fontWeight="bold"
    textAnchor="middle"
    writingMode="lr-tb"
  >
    <tspan x="31.813" y="201.195">
      Shift
    </tspan>
  </text>
  <path
    fill="none"
    fillRule="evenodd"
    stroke="#49fb35"
    strokeDasharray="none"
    strokeMiterlimit="4"
    strokeWidth="2"
    d="M27.25 207.125l-11.25 15h7.5v7.5H31v-7.5h7.5l-11.25-15z"
  ></path>
  </g>
  <g
  fillOpacity="1"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  transform="translate(727.5)"
  >
  <text
    x="31.813"
    y="201.195"
    style={{
      WebkitTextAlign: "center",
      textAlign: "center",
      lineHeight: "125%",
    }}
    fill="#49fb35"
    stroke="none"
    strokeWidth="1"
    fontFamily="Swis721 BT"
    fontSize="16"
    fontStretch="normal"
    fontStyle="normal"
    fontVariant="normal"
    fontWeight="bold"
    textAnchor="middle"
    writingMode="lr-tb"
  >
    <tspan x="31.813" y="201.195">
      Shift
    </tspan>
  </text>
  <path
    fill="none"
    fillRule="evenodd"
    stroke="#49fb35"
    strokeDasharray="none"
    strokeMiterlimit="4"
    strokeWidth="2"
    d="M27.25 207.125l-11.25 15h7.5v7.5H31v-7.5h7.5l-11.25-15z"
  ></path>
  </g>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M576.902 189.639v2.566l-10.465 4.277 10.465 4.266v2.566l-13.804-5.683v-2.332l13.804-5.66m-8.683 48.047v-1.372c.656-.187 1.14-.476 1.453-.867.312-.39.469-.898.469-1.523v-.293h-1.922v-3.527h3.55v3.386c0 1.164-.3 2.102-.902 2.813-.594.71-1.476 1.172-2.648 1.383"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M623.098 189.639l13.804 5.66v2.332l-13.804 5.683v-2.566l10.488-4.266-10.488-4.277v-2.566m5.12 43.992v-3.527h3.528v3.527h-3.527"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M688.447 198.615c0-.086-.004-.199-.011-.34a6.907 6.907 0 01-.012-.328c0-.687.074-1.258.222-1.71.149-.462.387-.891.715-1.29.25-.297.621-.636 1.114-1.02.5-.382.824-.66.972-.831.313-.352.528-.668.645-.95.117-.28.176-.59.176-.925 0-.742-.207-1.32-.622-1.735-.414-.414-.992-.62-1.734-.62s-1.328.25-1.758.75c-.422.491-.652 1.187-.691 2.085h-3.305v-.363c0-1.649.52-2.961 1.559-3.938 1.047-.984 2.453-1.476 4.219-1.476 1.804 0 3.238.465 4.3 1.394 1.07.922 1.606 2.16 1.606 3.715 0 .547-.063 1.04-.188 1.477-.117.43-.3.824-.55 1.183-.32.453-.817.946-1.489 1.477-.664.523-1.066.848-1.207.973-.297.289-.512.593-.644.914-.125.32-.188.703-.188 1.148 0 .04.004.106.012.2.008.093.012.163.012.21h-3.153m-.164 5.016v-3.434h3.457v3.434h-3.457m-1.969 32.226l5.813-19.933h1.605l-5.836 19.933h-1.582"
  fontFamily="Swis721 BT"
  fontSize="24"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M18 271.79c-.089 1.306-.594 2.345-1.516 3.116-.916.771-2.114 1.156-3.593 1.156-1.704 0-3.029-.53-3.977-1.593C7.971 273.406 7.5 271.917 7.5 270c0-1.958.482-3.458 1.445-4.5.964-1.042 2.35-1.562 4.157-1.563 1.468 0 2.627.36 3.476 1.079.854.713 1.323 1.724 1.406 3.03h-2.336c-.099-.65-.364-1.145-.796-1.483-.433-.344-1.016-.516-1.75-.516-1.042 0-1.834.336-2.375 1.008-.542.672-.813 1.653-.813 2.945 0 1.25.268 2.216.805 2.898.541.683 1.31 1.024 2.304 1.024.72 0 1.308-.182 1.766-.547.458-.37.755-.898.89-1.586H18m5.469 4.016c-.209.005-.459.013-.75.023-.287.016-.469.024-.547.024-.87 0-1.466-.162-1.79-.485-.317-.328-.476-.971-.476-1.93v-4.593h-1.125v-1.594h1.125v-2.32h2.25v2.32h1.313v1.594h-1.313v4.703c0 .224.05.372.149.445.099.068.302.102.61.102h.554v1.71m1.32-.062v-8.492h2.11v1.453c.296-.583.643-1.01 1.038-1.281.396-.276.868-.414 1.415-.414.088 0 .156.002.203.008.052 0 .093.002.125.007l.008 2.305h-.758c-.62 0-1.086.162-1.399.485-.312.322-.469.802-.468 1.437v4.492h-2.274m6.234 0v-11.508h2.274v11.508h-2.274"
  fontFamily="Swis721 BT"
  fontSize="16"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M162.969 266.496l-1.594 4.899h3.195l-1.601-4.899m-1.375-2.305h2.734l4.149 11.508h-2.485l-.781-2.367h-4.461l-.758 2.367H157.5l4.094-11.508m7.945 11.508v-11.508h2.274V275.7h-2.274m8.102.063c-.209.005-.459.013-.75.023-.287.016-.47.024-.547.024-.87 0-1.466-.162-1.79-.485-.317-.328-.476-.971-.476-1.93v-4.593h-1.125v-1.594h1.125v-2.32h2.25v2.32h1.313v1.594h-1.313v4.703c0 .224.05.372.149.445.099.068.302.102.609.102h.555v1.71"
  fontFamily="Swis721 BT"
  fontSize="16"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M828 271.79c-.089 1.306-.594 2.345-1.516 3.116-.916.771-2.114 1.156-3.593 1.156-1.703 0-3.029-.53-3.977-1.593-.943-1.063-1.414-2.552-1.414-4.469 0-1.958.482-3.458 1.445-4.5.964-1.042 2.35-1.562 4.157-1.563 1.468 0 2.627.36 3.476 1.079.854.713 1.323 1.724 1.406 3.03h-2.336c-.099-.65-.364-1.145-.796-1.483-.433-.344-1.016-.516-1.75-.516-1.042 0-1.834.336-2.375 1.008-.542.672-.813 1.653-.813 2.945 0 1.25.268 2.216.805 2.898.541.683 1.31 1.024 2.304 1.024.72 0 1.308-.182 1.766-.547.458-.37.755-.898.89-1.586H828m5.469 4.016c-.209.005-.459.013-.75.023-.287.016-.469.024-.547.024-.87 0-1.466-.162-1.79-.485-.317-.328-.476-.971-.476-1.93v-4.593h-1.125v-1.594h1.125v-2.32h2.25v2.32h1.313v1.594h-1.313v4.703c0 .224.05.372.149.445.099.068.302.102.61.102h.554v1.71m1.32-.062v-8.492h2.11v1.453c.296-.583.643-1.01 1.038-1.281.396-.276.868-.414 1.415-.414.088 0 .156.002.203.008.052 0 .093.002.125.007l.008 2.305h-.758c-.62 0-1.086.162-1.399.485-.312.322-.468.802-.468 1.437v4.492h-2.274m6.234 0v-11.508h2.274v11.508h-2.274"
  fontFamily="Swis721 BT"
  fontSize="16"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M108.945 264.02l-3.297-11.508h2.454l1.968 8.117 1.664-8.117h2.524l1.664 8.117 1.969-8.117h2.43l-3.29 11.508h-2.258l-1.78-8.813-1.79 8.813h-2.258m12.555-9.438v-2.07h2.273v2.07H121.5m0 9.438v-8.493h2.273v8.493H121.5m4.297 0v-8.493h2.226v1.008a3.059 3.059 0 011.125-.922 3.286 3.286 0 011.446-.312c.937 0 1.638.245 2.101.734.47.485.703 1.216.703 2.195v5.79h-2.273v-5.133c0-.61-.104-1.045-.313-1.305-.203-.26-.536-.39-1-.39-.536 0-.96.16-1.273.484-.312.317-.469.752-.469 1.304v5.04h-2.273m-19.149 20v-11.508h2.368v4.726l4.492-4.726h2.96l-4.593 4.656 5.008 6.852h-2.89l-3.75-5.266-1.227 1.219v4.047h-2.368m16.29-2.579h2.265c-.23.896-.693 1.6-1.39 2.11-.693.505-1.54.758-2.54.758-1.229 0-2.203-.412-2.921-1.235-.72-.828-1.079-1.948-1.079-3.36 0-1.39.355-2.486 1.063-3.288.708-.802 1.677-1.203 2.906-1.203 1.302 0 2.307.395 3.016 1.187.708.787 1.062 1.909 1.062 3.367 0 .162-.002.284-.007.368 0 .078-.006.153-.016.226h-5.672c.031.667.193 1.17.484 1.508.297.338.722.508 1.274.508.39 0 .71-.076.96-.227.25-.156.449-.396.594-.719m-3.312-2.562h3.344c-.021-.573-.175-1.008-.461-1.305-.281-.302-.688-.453-1.219-.453-.495 0-.885.151-1.172.453-.281.302-.445.737-.492 1.305m7.54 8.547v-1.836c.072.01.147.018.226.023.078.005.18.008.304.008.448 0 .784-.107 1.008-.32.224-.209.336-.524.336-.946a.56.56 0 00-.016-.117 1.211 1.211 0 00-.03-.117l-3.063-8.594h2.5l1.789 6.125 1.742-6.125h2.39l-3.492 10.016c-.26.75-.586 1.26-.976 1.531-.39.276-.977.414-1.758.414-.14 0-.292-.005-.453-.015a9.703 9.703 0 01-.508-.047"
  fontFamily="Swis721 BT"
  fontSize="16"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M708.945 264.02l-3.297-11.508h2.454l1.968 8.117 1.664-8.117h2.524l1.664 8.117 1.969-8.117h2.43l-3.29 11.508h-2.258l-1.78-8.813-1.79 8.813h-2.258m12.555-9.438v-2.07h2.273v2.07H721.5m0 9.438v-8.493h2.273v8.493H721.5m4.297 0v-8.493h2.226v1.008a3.059 3.059 0 011.125-.922 3.286 3.286 0 011.446-.312c.937 0 1.638.245 2.101.734.469.485.703 1.216.703 2.195v5.79h-2.273v-5.133c0-.61-.104-1.045-.313-1.305-.203-.26-.536-.39-1-.39-.536 0-.96.16-1.273.484-.312.317-.469.752-.469 1.304v5.04h-2.273m-19.149 20v-11.508h2.368v4.726l4.492-4.726h2.96l-4.593 4.656 5.008 6.852h-2.89l-3.75-5.266-1.227 1.219v4.047h-2.368m16.29-2.579h2.265c-.23.896-.693 1.6-1.39 2.11-.693.505-1.54.758-2.54.758-1.229 0-2.203-.412-2.921-1.235-.72-.828-1.079-1.948-1.079-3.36 0-1.39.355-2.486 1.063-3.288.708-.802 1.677-1.203 2.906-1.203 1.302 0 2.307.395 3.016 1.187.708.787 1.062 1.909 1.062 3.367 0 .162-.002.284-.008.368 0 .078-.005.153-.015.226h-5.672c.031.667.193 1.17.484 1.508.297.338.722.508 1.274.508.39 0 .71-.076.96-.227.25-.156.449-.396.595-.719m-3.313-2.562h3.344c-.021-.573-.175-1.008-.461-1.305-.281-.302-.688-.453-1.219-.453-.495 0-.885.151-1.172.453-.281.302-.445.737-.492 1.305m7.54 8.547v-1.836c.072.01.148.018.226.023.078.005.18.008.304.008.448 0 .784-.107 1.008-.32.224-.209.336-.524.336-.946a.56.56 0 00-.016-.117 1.211 1.211 0 00-.03-.117l-3.063-8.594h2.5l1.789 6.125 1.742-6.125h2.39l-3.492 10.016c-.26.75-.586 1.26-.976 1.531-.39.276-.977.414-1.758.414-.14 0-.292-.005-.453-.015a9.703 9.703 0 01-.508-.047"
  fontFamily="Swis721 BT"
  fontSize="16"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  strokeLinecap="butt"
  strokeLinejoin="miter"
  strokeOpacity="1"
  strokeWidth="1"
  d="M759.984 275.61v-11.508h3.5l2.29 8.757 2.257-8.757h3.516v11.507h-2.219v-9.28l-2.336 9.28h-2.422l-2.367-9.28v9.28h-2.219m19.008-2.578h2.266c-.23.896-.693 1.6-1.39 2.11-.694.505-1.54.757-2.54.757-1.229 0-2.203-.411-2.922-1.234-.718-.828-1.078-1.948-1.078-3.36 0-1.39.354-2.486 1.063-3.288.708-.802 1.677-1.203 2.906-1.204 1.302 0 2.307.396 3.015 1.188.709.786 1.063 1.909 1.063 3.367 0 .162-.003.284-.008.367 0 .079-.005.154-.015.227h-5.672c.03.667.192 1.17.484 1.508.297.338.721.508 1.274.508.39 0 .71-.076.96-.227.25-.156.448-.396.594-.719m-3.312-2.562h3.343c-.02-.573-.174-1.008-.46-1.305-.282-.302-.688-.453-1.22-.453-.494 0-.885.151-1.171.453-.281.302-.445.737-.492 1.305m7.203 5.14v-8.492h2.226v1.008a3.059 3.059 0 011.125-.922 3.286 3.286 0 011.446-.312c.937 0 1.638.244 2.101.734.469.484.703 1.216.703 2.195v5.79h-2.273v-5.133c0-.61-.104-1.045-.313-1.305-.203-.26-.536-.39-1-.39-.536 0-.96.16-1.273.484-.313.317-.469.752-.469 1.304v5.04h-2.273m17.133-8.493v8.492h-2.227v-1.007c-.323.411-.7.72-1.133.93a3.324 3.324 0 01-1.445.304c-.932 0-1.633-.245-2.102-.734-.463-.49-.695-1.222-.695-2.196v-5.789h2.274v5.133c0 .604.101 1.036.304 1.297.203.255.54.383 1.008.383.531 0 .953-.16 1.266-.477.317-.323.476-.76.476-1.312v-5.024h2.274"
  fontFamily="Swis721 BT"
  fontSize="16"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"
  ></path>
  <path
  style={{
    WebkitTextAlign: "center",
    textAlign: "center",
    lineHeight: "125%",
  }}
  fill="#49fb35"
  fillOpacity="1"
  stroke="none"
  d="M612.969 266.496l-1.594 4.899h3.195l-1.601-4.899m-1.375-2.305h2.734l4.149 11.508h-2.485l-.781-2.367h-4.461l-.758 2.367H607.5l4.094-11.508m7.945 11.508v-11.508h2.273V275.7h-2.273m8.102.063c-.209.005-.459.013-.75.023a13.73 13.73 0 01-.547.024c-.87 0-1.466-.162-1.79-.485-.317-.328-.476-.971-.476-1.93v-4.593h-1.125v-1.594h1.125v-2.32h2.25v2.32h1.313v1.594h-1.313v4.703c0 .224.05.372.149.445.099.068.302.102.609.102h.555v1.71"
  fontFamily="Swis721 BT"
  fontSize="16"
  fontStretch="normal"
  fontStyle="normal"
  fontVariant="normal"
  fontWeight="bold"
  textAnchor="middle"
  writingMode="lr-tb"

  ></path>
  </g>
  </svg>
  </>
  );
  }
