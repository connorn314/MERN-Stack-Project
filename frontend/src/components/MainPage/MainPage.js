import backgroundVideo from './neon-background.mp4'
import './MainPage.css'

function MainPage() {
  return (
    <>
      <div className="main-mainpage-container">
        <video className='background-video' autoPlay loop muted id='video' src={backgroundVideo} />
          <div className='text-box-container'>
            <p className='splash-text'>Welcome to KEYWI</p>
          </div>
      </div>
    </>
  );
}

export default MainPage;