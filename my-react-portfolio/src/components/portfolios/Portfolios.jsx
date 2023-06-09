import './portfolios.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Crypto Visualization',
        github: 'https://github.com',
        demo: 'https://dribbble.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Charts and Graphics',
        github: 'https://github.com',
        demo: 'https://dribbble.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Mobile Stocks App',
        github: 'https://github.com',
        demo: 'https://dribbble.com'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Crypto App',
        github: 'https://github.com',
        demo: 'https://dribbble.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Sales App',
        github: 'https://github.com',
        demo: 'https://dribbble.com'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Statistics for Crypto',
        github: 'https://github.com',
        demo: 'https://dribbble.com'
    }
]

function Portfolios(){
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                {
                    data.map(({id, image, title, github, demo}) => {
                        return(
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={image} alt={title}></img>
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}
export default Portfolios;