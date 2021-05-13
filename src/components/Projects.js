import memoryImg from '../assets/memory-game.jpg';
import weatherImg from '../assets/weather.png';
import unsplashImg from '../assets/unsplash.png';

function Projects({id}) {
    return (
        <div className="my-100" id={id}>
            <h2 className="font-30 color-yellow text-center text-shadow">MY PROJECTS</h2>
            <div className="d-flex flex-wrap j-center mb-50">
                <div>
                    <h3 className="text-center">Memory game</h3>
                    <a href="https://memorize-cards.herokuapp.com/" target="_blank" rel="noreferrer"><img
                        className="img-projects" src={memoryImg} alt="project"/></a>
                </div>
                <div>
                    <h3 className="text-center">Weather app</h3>
                    <a href="https://jurgitaesu.github.io/React-Weather-App/" target="_blank" rel="noreferrer"><img
                        className="img-projects" src={weatherImg} alt="project"/></a>
                </div>
                <div>
                    <h3 className="text-center">Unsplash app</h3>
                    <a href="https://jurgitaesu.github.io/React-Unsplash-Infinite-Scroll/" target="_blank"
                       rel="noreferrer"><img className="img-projects" src={unsplashImg} alt="project"/></a>
                </div>
            </div>
        </div>
    );
}

export default Projects;