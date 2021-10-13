import memoryImg from '../assets/memory.png';
import newsImg from '../assets/gnews.png';
import pizzaImg from '../assets/pizza.png';
import usersImg from '../assets/users.png';

function Projects({id}) {
    return (
        <div className="my-100" id={id}>
            <h2 className="font-30 color-yellow text-center text-shadow">MY PROJECTS</h2>
            <div className="d-flex flex-wrap j-center mb-50">
                <div className="mx-10">
                    <h3 className="text-center">Pizza app (CRUD)</h3>
                    <p className="description-projects">App created using Vanilla JS allowing to create, update and delete pizzas.</p>
                    <a href="https://jurgitaesu.github.io/pizzeria-app/" target="_blank"
                       rel="noreferrer"><img className="img-projects" src={pizzaImg} alt="project"/></a>
                    <p className="font-italic w-230p">Source code: <a href="https://github.com/Jurgitaesu/pizzeria-app" target="_blank" rel="noreferrer">Github</a></p>
                </div>
                <div className="mx-10">
                    <h3 className="text-center">Memory game</h3>
                    <p className="description-projects">Game created using Vanilla JS. Deployed to Heroku cloud with Node JS.</p>
                    <a href="https://memorize-cards.herokuapp.com/" target="_blank" rel="noreferrer"><img
                        className="img-projects" src={memoryImg} alt="project"/></a>
                    <p className="font-italic w-230p">Source code: <a href="https://github.com/Jurgitaesu/Memory-game-heroku" target="_blank" rel="noreferrer">Github</a></p>
                </div>
                <div className="mx-10">
                    <h3 className="text-center">Google News app</h3>
                    <p className="description-projects">React JS and Node JS app writing user's actions on MongoDB. Using GNews API.</p>
                    <a href="https://news-search-on-gnews.herokuapp.com/" target="_blank"
                       rel="noreferrer"><img className="img-projects" src={newsImg} alt="project"/></a>
                    <p className="font-italic w-230p">Source code: <a href="https://github.com/Jurgitaesu/heroku-gnews-app" target="_blank" rel="noreferrer">Github</a></p>
                </div>
                <div className="mx-10">
                    <h3 className="text-center">Users app (CRUD)</h3>
                    <p className="description-projects">React JS and Node JS app allowing to create, update and delete users in MongoDB.</p>
                    <a href="https://users-crud-mern.herokuapp.com/" target="_blank"
                       rel="noreferrer"><img className="img-projects" src={usersImg} alt="project"/></a>
                    <p className="font-italic w-230p">Source code: <a href="https://github.com/Jurgitaesu/React-Users-CRUD" target="_blank" rel="noreferrer">Github</a></p>
                </div>
            </div>
        </div>
    );
}

export default Projects;