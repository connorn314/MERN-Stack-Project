import './GameBanner.css'
const GameBanner = ({game, i}) => {

  
  return (
    <>
      <div className={`main-banner-container_${i}`} >
        <img className={`gamebanner_${i}`} />
        <div className='game-information-main-container'>
          <div className='game-information-text-container'>
            <p className='game-description-text'>{game.description}</p>

          </div>
        </div>

      </div>
    </>
  )
}

export default GameBanner