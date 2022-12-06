import './Footer.css'
import logo from './github-white.png'


const Footer = () => {
    return (
        <div id='footer-container'>
            <div className='github-container'>
                <a href="https://github.com/connorn314/MERN-Stack-Project" target='_blank'>
                    <img src={logo} height="60px" width="60px" />
                </a>
            </div>
            <div className='linkedIn-container'>
                LinkedIn:
                <a href="hhttps://www.linkedin.com/in/connor-norton-318b0a19a/" target="_blank"><p className='name-1'>Connor Norton</p></a>
                <a href="https://www.linkedin.com/in/shuhei-shibahara/" target="_blank"><p className='name-2'>Shuhei Shibahara</p></a>
                <a href="https://www.linkedin.com/in/michael-aman-ba1086258/" target="_blank"><p className='name-3'>Michael Aman</p></a>
            </div>
        </div>
    )
}

export default Footer;

