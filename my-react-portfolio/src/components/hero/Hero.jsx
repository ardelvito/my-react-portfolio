import './hero.css';
import ME from '../../assets/myphoto.jpg';
function Hero(){
    return(
        <div id="hero">
            <div  className='container hero__container'>
                <div className='hero__me'>
                    <div className='hero__me-image'>
                        <img src={ME} alt='About Me'></img>
                    </div>
                </div>
                <div className='hero__content'>
                    <h5>Hello Im</h5>
                    <h1>Ardel Vito</h1>
                    <h5 className="text-light">Fullstack Web Developer</h5>
                    <p>
                        I am a third year student at the university of surabaya majoring in informatics engineering.  I am someone who has a good interest and enthusiasm for learning because technology is always developing rapidly, therefore we need to adapt.
                    </p>
                    <a href='#contact' className='btn btn-primary'>Contact Me!</a>
                </div>
            </div>
        </div>
    )
}
export default Hero;