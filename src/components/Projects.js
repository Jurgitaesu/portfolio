import memoryImg from '../assets/memory.png';
import newsImg from '../assets/gnews.png';
import pizzaImg from '../assets/pizza.png';

function Projects({id}) {
    return (
        <div className="my-100" id={id}>
            <h2 className="font-30 color-yellow text-center text-shadow">MY PROJECTS</h2>
            <div className="d-flex flex-wrap j-center mb-50">
                <div className="mx-10">
                    <h3 className="text-center">Pizza app (CRUD)</h3>
                    <p className="description-projects">App created using Vanilla JS. It allows to add, edit and delete pizzas.</p>
                    <a href="https://jurgitaesu.github.io/pizzeria-app/" target="_blank"
                       rel="noreferrer"><img className="img-projects" src={pizzaImg} alt="project"/></a>
                </div>
                <div className="mx-10">
                    <h3 className="text-center">Memory game</h3>
                    <p className="description-projects">Game created using Vanilla JS. It is deployed to Heroku cloud with Node JS.</p>
                    <a href="https://memorize-cards.herokuapp.com/" target="_blank" rel="noreferrer"><img
                        className="img-projects" src={memoryImg} alt="project"/></a>
                </div>
                <div className="mx-10">
                    <h3 className="text-center">Google News app</h3>
                    <p className="description-projects">React JS and Node JS app where user actions are written to MongoDB. Stored on Heroku.</p>
                    <a href="https://news-search-on-gnews.herokuapp.com/" target="_blank"
                       rel="noreferrer"><img className="img-projects" src={newsImg} alt="project"/></a>
                </div>
            </div>
        </div>
    );
}

export default Projects;