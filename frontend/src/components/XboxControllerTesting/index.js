import './xboxTest.css'
import React from "react";



export default function XboxControllerTest({handleSelection}){

    const handleHover = (e) => {
        let tag = document.getElementById(e.target.id) 
        tag.style.fill = "#49FB35"
        tag.style.color = "purple"
    }

    const handleSpecialHover = (e) => {
        let tag = document.getElementsByClassName(e.target.className.animVal)
        for (let i = 0 ; i < tag.length ; i++ ){
            tag.item(i).style.fill = "#49FB35"
        }
    }

    const handleSpecialLeave = (e) => {
        let tag = document.getElementsByClassName(e.target.className.animVal)
        for (let i = 0 ; i < tag.length ; i++ ){
            tag.item(i).style.fill = "transparent"
        }
    }

    const handleLeave = (e) => {
        let tag = document.getElementById(e.target.id) 
        tag.style.fill = "transparent"
    }

    return (
    <div id="xbox-container-test">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 35430 29525" >
            <g>
                <g stroke="#49FB35" strokeWidth="88.575">
                <g fill="none" stroke='#49FB35'>
                    <path d="M12414 24480c-1231 0-1517 46-1742 106s-406 150-1276 676c-856 525-2403 1471-3289 1982-871 510-1096 586-1322 645-225 45-465 76-735 45-271-30-556-104-916-270-361-165-797-435-1157-780-345-346-630-767-841-1232-210-481-345-1021-420-1547-60-526-60-1066-15-1682s150-1306 450-2522c301-1202 796-2914 1277-4431 496-1516 976-2838 1261-3619 301-781 391-1021 526-1216 135-196 300-345 661-495 360-166 901-331 1546-496 631-180 1367-361 1997-496 646-135 1172-240 1607-285 436-45 781-30 1052 15 285 30 480 90 691 165 195 75 405 166 600 210 210 45 405 45 1367 45h7959c961 0 1156 0 1366-45 196-44 406-135 601-210 210-75 405-135 691-165 270-45 615-60 1051-15 435 45 961 150 1607 285 631 135 1366 316 1997 496 646 165 1186 330 1547 496 360 150 525 299 661 495 134 195 225 435 525 1216 285 781 766 2103 1262 3619 480 1517 976 3229 1276 4431 300 1216 405 1906 450 2522s45 1156-15 1682c-74 526-210 1066-420 1547-210 465-496 886-841 1232-360 345-796 615-1156 780-360 166-646 240-916 270-271 31-511 0-736-45-226-59-451-135-1322-645-886-511-2432-1457-3288-1982-871-526-1052-616-1277-676s-510-106-1742-106c-3514-44-7088-44-10602 0h0z"></path>
                    <path d="M13751 9283h-616c-90 15-225 15-330 15-196-15-316-15-526-74-195-61-466-166-721-241s-480-120-720-135c-241-30-466-30-1007 45-525 75-1351 240-2147 435-796 181-1532 391-1998 526-450 135-630 195-690 210s-30-15 75-210c105-210 270-601 375-826 120-210 196-270 526-450 346-166 931-451 1532-661 585-225 1156-391 1666-510 496-106 916-166 1217-181 300-15 466 15 631 60 149 60 285 135 450 240 165 106 375 225 511 316 150 90 255 135 435 165 60 15 135 15 211 30 60-15 255-15 901 0 2793 15 5601 15 8394 0 901-15 931-15 931 0h15c90-15 180-15 255-30 105-30 196-75 346-165 150-91 345-210 511-316 164-105 300-180 465-240 150-45 315-75 616-60 300 15 721 75 1231 181 495 119 1066 285 1667 510 586 210 1186 495 1517 661 330 180 405 240 525 450 121 225 286 616 376 826 105 195 135 225 74 210-59-15-225-75-690-210-451-135-1201-345-1997-526-781-195-1622-360-2148-435-540-75-766-75-1006-45-225 15-466 60-721 135-240 75-525 180-721 241-195 59-330 59-510 74-90 0-195 0-285-15h-661c-2658 15-5317 15-7959 0h0z"></path>
                    <path d="M6077 8337c120-255 405-766 555-1051 151-300 166-375 241-481 60-104 165-255 240-360s135-180 210-240c76-60 151-90 346-150 180-45 466-136 661-181 180-29 270-44 345-44 90 0 150 0 210 15s105 29 151 59c29 30 59 76 104 136s91 165 151 315c59 135 135 346 195 511s105 315 120 390c30 60 30 60 15 75 0 0-15 0-150 15-136 30-376 75-631 135-240 60-495 136-781 225-270 91-585 196-871 316-285 120-526 225-721 315s-330 166-405 196c-90 45-105 60 15-196h0zM29368 8337c-120-255-390-766-540-1051-150-300-181-375-241-481-74-104-180-255-255-360s-135-180-210-240-150-90-345-150c-180-45-466-136-646-181-195-29-286-44-361-44-74 0-150 0-210 15s-105 29-135 59c-45 30-75 76-120 136-30 60-90 165-150 315-60 135-135 346-180 511-61 165-121 315-136 390-14 60-14 60-14 75 14 0 14 0 150 15 134 30 375 75 630 135 240 60 496 136 781 225 285 91 586 196 871 316 286 120 541 225 721 315 195 90 330 166 405 196 91 45 120 60-15-196h0zM12714 8037c60 30 106 45 151 75 45 45 90 90 135 196 30 89 75 255 90 420 15 180 0 375 0 570M22460 8037c-59 30-104 45-150 75-45 45-90 90-134 196-31 89-76 255-91 420-15 180 0 375 0 570"></path>
                </g>
                <g>
                    <circle fill="transparent" stroke="none" cx="13050" cy="18800" r="900" id="Directional pad up" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)}></circle>
                    <circle fill="transparent" stroke="none" cx="11400" cy="20400" r="900" id="Directional pad left" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)}></circle>
                    <circle fill="transparent" stroke="none" cx="14700" cy="20400" r="900" id="Directional pad right" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)}></circle>
                    <circle fill="transparent" stroke="none" cx="13050" cy="22000" r="900" id="Directional pad down" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)}></circle>

                    <path
                    fill="none"
                    d="M12474 17768h1201c211 0 391 180 391 405v1202h1201c225 0 406 180 406 390v1202c0 225-181 405-406 405h-1201v1202c0 210-180 390-391 390h-1201c-225 0-406-180-406-390v-1202h-1200c-211 0-391-180-391-405v-1202c0-210 180-390 391-390h1200v-1202c0-225 181-405 406-405z"
                    />
                </g>
                
                <circle cx="8330" cy="14885" r="2388" fill="none"></circle>
                <circle cx="8269" cy="15110" r="1952" fill="none"></circle>
                <circle cx="22416" cy="20246" r="2388" fill="none"></circle>
                <circle cx="22356" cy="20471" r="1952" fill="none"></circle>

                <g fill="none">
                    <circle cx="17205" cy="15516" r="345"></circle>
                    <path d="M16979 15440l139-140c39-38 101-38 139 0l140 140c38 38 38 100 0 139l-140 139c-38 38-100 38-139 0l-139-139c-38-39-38-101 0-139z"></path>
                </g>

                <g fill="none">
                    <circle cx="18015" cy="15516" r="345"></circle>
                    <path d="M17797 15440l139-140c39-38 101-38 139 0l140 140c38 38 38 100 0 139l-140 139c-38 38-100 38-139 0l-139-139c-39-39-39-101 0-139z"></path>
                </g>

                <g fill="none">
                    <circle cx="17205" cy="16296" r="345"></circle>
                    <path d="M16979 16225l139-140c39-38 101-38 139 0l140 140c38 38 38 100 0 138l-140 140c-38 38-100 38-139 0l-139-140c-38-38-38-100 0-138z"></path>
                </g>

                <g fill="none">
                    <circle cx="18015" cy="16296" r="345"></circle>
                    <path d="M17797 16225l139-140c39-38 101-38 139 0l140 140c38 38 38 100 0 138l-140 140c-38 38-100 38-139 0l-139-140c-39-38-39-100 0-138z"></path>
                </g>

                <circle cx="14982" cy="14885" r="856" fill="none" id='Start button' onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)} onClick={handleSelection}></circle>
                <path fill="none" d="M14847 14885H15449V15295H14847z" id='Start button' onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)} onClick={handleSelection}></path>
                <path fill="none" d="M14712 14960L14487 14960 14487 14554 15102 14554 15102 14719" id='Start button' onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)} onClick={handleSelection}/>

                <circle cx="20163" cy="14885" r="856" fill="none" id='Right start button' onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)} onClick={handleSelection}></circle>

                <path fill="none" d="M19727 14690L20584 14690" id='Right start button' onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)} onClick={handleSelection}></path>
                <path fill="none" d="M19727 14960L20584 14960" id='Right start button' onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)} onClick={handleSelection}></path>
                <path fill="green" d="M19727 15200L20584 15200" id='Right start button' onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)} onClick={handleSelection}></path>

                <circle cx="17580" cy="11175" r="1427" fill="none" id='Home button' onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)} onClick={handleSelection}></circle>
                <path
                    fill="transparent"
                    d="M18571 12197c75-60 120-105 135-151-180-645-420-1126-736-1471 210-136 421-255 661-346-75-75-150-165-225-195-300 0-571 76-826 225-240-149-526-225-826-225-60 30-150 120-210 195 225 91 436 210 646 346-301 345-556 826-736 1471 30 46 75 91 135 151 270-511 601-961 991-1307 390 346 721 796 991 1307h0z"
                    id='Home button'
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseLeave={(e) => handleLeave(e)} 
                    onClick={handleSelection}
                />

                <ellipse cx="14817" cy="8352" fill="#49FB35" rx="615" ry="210"></ellipse>
                
                <circle className='controllerButton' cx="8209" cy="15200" r="1772" fill="transparent" id="Left stick" onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)} onClick={handleSelection}></circle>
                <circle className='controllerButton' cx="22386" cy="20546" r="1772" fill="transparent" id='Right stick' onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)} onClick={handleSelection}></circle>
            
                <circle fill="transparent" stroke="none" cx="8500" cy="6800" r="850" id="Left Trigger" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)}></circle>
                <circle fill="transparent" stroke="none" cx="27000" cy="6800" r="850" id="Right Trigger" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)}></circle>

                <circle fill="transparent" stroke="none" cx="6500" cy="9000" r="600" id="Left bumper" className="LeftBump" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleSpecialHover(e)} onMouseLeave={(e) => handleSpecialLeave(e)}></circle>
                <circle fill="transparent" stroke="none" cx="7500" cy="8700" r="650" id="Left bumper" className="LeftBump" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleSpecialHover(e)} onMouseLeave={(e) => handleSpecialLeave(e)}></circle>
                <circle fill="transparent" stroke="none" cx="8500" cy="8400" r="650" id="Left bumper" className="LeftBump" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleSpecialHover(e)} onMouseLeave={(e) => handleSpecialLeave(e)}></circle>
                <circle fill="transparent" stroke="none" cx="9500" cy="8150" r="700" id="Left bumper" className="LeftBump" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleSpecialHover(e)} onMouseLeave={(e) => handleSpecialLeave(e)}></circle>
                <circle fill="transparent" stroke="none" cx="10500" cy="8000" r="700" id="Left bumper" className="LeftBump" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleSpecialHover(e)} onMouseLeave={(e) => handleSpecialLeave(e)}></circle>

                <circle fill="transparent" stroke="none" cx="25000" cy="8000"  r="700" id="Right bumper" className="RightBump" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleSpecialHover(e)} onMouseLeave={(e) => handleSpecialLeave(e)}></circle>
                <circle fill="transparent" stroke="none" cx="26000" cy="8150"  r="700" id="Right bumper" className="RightBump" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleSpecialHover(e)} onMouseLeave={(e) => handleSpecialLeave(e)}></circle>
                <circle fill="transparent" stroke="none" cx="27000" cy="8400"  r="650" id="Right bumper" className="RightBump" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleSpecialHover(e)} onMouseLeave={(e) => handleSpecialLeave(e)}></circle>
                <circle fill="transparent" stroke="none" cx="28000" cy="8700"  r="650" id="Right bumper" className="RightBump" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleSpecialHover(e)} onMouseLeave={(e) => handleSpecialLeave(e)}></circle>
                <circle fill="transparent" stroke="none" cx="29000" cy="9000"  r="600" id="Right bumper" className="RightBump" onClick={(e) => handleSelection(e)} onMouseEnter={(e) => handleSpecialHover(e)} onMouseLeave={(e) => handleSpecialLeave(e)}></circle>



                <circle cx="25059" cy="15155" r="1217" fill="none" stroke="#49FB35"  id="X button" onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)} onClick={handleSelection} ></circle>
                <circle cx="27521" cy="12797" r="1217" fill="none" id="Y button" stroke='#49FB35' onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)} onClick={handleSelection} ></circle>
                <circle cx="27431" cy="17333" r="1217" fill="none" id="A button" stroke='#49FB35' onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)} onClick={handleSelection} ></circle>
                <circle cx="29909" cy="14975" r="1217" fill="none" id="B button" stroke='#49FB35' onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleLeave(e)} onClick={handleSelection} ></circle>

                <path
                    className='controllerButton'
                    id="X button"
                    onClick={(e) => handleSelection(e)}
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseLeave={(e) => handleLeave(e)}
                    d="M24428 15816l510-676-450-631h210l240 346c45 60 75 120 105 150 31-45 61-90 91-135l270-361h195l-465 631 495 676h-210l-330-466c-30-14-46-45-61-75-30 45-45 75-60 90l-330 451h-210 0z"
                ></path>

                <path
                    className='controllerButton'
                    id="X button"
                    onClick={(e) => handleSelection(e)}
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseLeave={(e) => handleLeave(e)}
                    fill="none"
                    fillRule="nonzero"
                    d="M24428 15816l510-676-450-631h210l240 346c45 60 75 120 105 150 31-45 61-90 91-135l270-361h195l-465 631 495 676h-210l-330-466c-30-14-46-45-61-75-30 45-45 75-60 90l-330 451h-210z"
                ></path>

                <path
                    className='controllerButton'
                    id="Y button"
                    onMouseEnter={(e) => handleHover(e)}
                    onClick={(e) => handleSelection(e)}
                    fillRule="nonzero"
                    d="M27446 13533v-556l-510-750h210l255 405c45 75 90 135 135 211 46-61 91-136 150-226l256-390h195l-525 750v556h-166 0z"
                ></path>

                <path
                    className='controllerButton'
                    id="Y button"
                    onMouseEnter={(e) => handleHover(e)}
                    onClick={(e) => handleSelection(e)}
                    onMouseLeave={(e) => handleLeave(e)}
                    fill="none"
                    fillRule="nonzero"
                    d="M27446 13533v-556l-510-750h210l255 405c45 75 90 135 135 211 46-61 91-136 150-226l256-390h195l-525 750v556h-166 0z"
                ></path>

                <path
                    className='controllerButton'
                    id="B button"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseLeave={(e) => handleLeave(e)}
                    onClick={(e) => handleSelection(e)}
                    fillRule="nonzero"
                    d="M29503 15635v-1306h496c90 0 180 15 240 30 61 30 106 76 136 120 29 60 44 120 44 181 0 59-15 104-44 150-30 60-75 90-136 120 91 30 151 75 180 120 46 60 76 120 76 195s-15 120-46 180c-30 45-59 91-89 121-45 30-91 45-151 60s-120 29-210 29h-496 0zm166-765h285c75 0 135 0 165-15 45-15 75-30 105-60 15-31 30-76 30-120 0-45-15-76-30-106-15-45-45-60-90-75-29-15-105-15-195-15h-270v391h0zm0 615h330c60 0 90-15 120-15 45 0 75-15 105-30 15-15 45-45 61-75 15-29 30-75 30-105 0-60-15-105-46-135-15-30-60-60-105-75s-105-30-180-30h-315v465h0z"
                ></path>

                <path
                    className='controllerButton'
                    id="B button"
                    onMouseEnter={(e) => handleHover(e)}
                    onClick={(e) => handleSelection(e)}
                    fill="none"
                    fillRule="nonzero"
                    d="M29503 15635v-1306h496c90 0 180 15 240 30 61 30 106 76 136 120 29 60 44 120 44 181 0 59-15 104-44 150-30 60-75 90-136 120 91 30 151 75 180 120 46 60 76 120 76 195s-15 120-46 180c-30 45-59 91-89 121-45 30-91 45-151 60s-120 29-210 29h-496 0zm166-765h285c75 0 135 0 165-15 45-15 75-30 105-60 15-31 30-76 30-120 0-45-15-76-30-106-15-45-45-60-90-75-29-15-105-15-195-15h-270v391h0zm0 615h330c60 0 90-15 120-15 45 0 75-15 105-30 15-15 45-45 61-75 15-29 30-75 30-105 0-60-15-105-46-135-15-30-60-60-105-75s-105-30-180-30h-315v465h0z"
                ></path>

                <path
                    className='controllerButton'
                    id="A button"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseLeave={(e) => handleLeave(e)}
                    onClick={(e) => handleSelection(e)}
                    fillRule="nonzero"
                    d="M26815 17948l496-1306h195l541 1306h-195l-166-390h-540l-150 390h-181 0zm376-525h451l-136-376c-45-105-75-195-105-270-15 90-30 165-60 255l-150 391z"
                ></path>

                <path
                    className='controllerButton'
                    id="A button"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseLeave={(e) => handleLeave(e)}
                    onClick={(e) => handleSelection(e)}
                    fill="none"
                    fillRule="nonzero"
                    d="M26815 17948l496-1306h195l541 1306h-195l-166-390h-540l-150 390h-181 0zm376-525h451l-136-376c-45-105-75-195-105-270-15 90-30 165-60 255l-150 391z"
                ></path>
                </g>
            </g>
        </svg>
    </div>


    );
}