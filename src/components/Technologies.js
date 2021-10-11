import htmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.svg';
import jsLogo from '../assets/js.svg';
import reactLogo from '../assets/react.svg';
import npmLogo from '../assets/npm.svg';
import nodeLogo from '../assets/node.svg';
import mongodbLogo from '../assets/mongodb.svg';
import expressjsLogo from '../assets/expressjs.svg';
import bootstrapLogo from '../assets/bootstrap.svg';
import tailwindLogo from '../assets/tailwind.svg';
import herokuLogo from '../assets/heroku.png';
import sassLogo from '../assets/sass.svg';
import githubLogo from '../assets/github.svg';
import seleniumLogo from '../assets/selenium.svg';
import phpLogo from '../assets/php.svg';
import laravelLogo from '../assets/laravel.svg';
import androidLogo from '../assets/android.svg';
import linuxLogo from '../assets/linux.svg';

function Technologies({id}) {
    return (
        <div>
            <div className="pt-50 pb-100">
                <h2 className="color-yellow text-center mg-20">“Learning is a treasure that will follow its owner
                    everywhere.”</h2>
                <h2 className="text-right mr-150">— Chinese Proverb</h2>
            </div>
            <h2 className="text-center color-yellow text-shadow font-30" id={id}>TECHNOLOGIES</h2>
            <div className="d-flex md-direction-col">
                <div>
                    <h2 className="text-center">My learning timeline</h2>
                    <div className="d-flex j-center mx-40 md-mx-10 sm-direction-col">
                        <div className="border-right p-absolute">
                            <span className="bubble bubble-green sm-left"></span>
                            <span className="bubble bubble-dark-blue sm-left"></span>
                            <span className="bubble bubble-purple sm-left"></span>
                            <span className="bubble bubble-orange sm-left"></span>
                            <span className="bubble bubble-blue sm-left"></span>
                            <span className="bubble bubble-pink sm-left"></span>
                            <span className="bubble bubble-turquoise sm-left"></span>

                            <div className="box pd-20 mg-20 border-turquoise sm-w-280">
                                <div className="font-bold">2021.05-2021.06</div>
                                <div>Code Academy</div>
                                <div className="font-bold color-turquoise">React JS (160 h)</div>
                                <div className="font-italic">React JS, Node JS, MongoDb, SASS</div>
                            </div>
                            <div className="box pd-20 mg-20 border-dark-blue sm-w-280">
                                <div className="font-bold">2021.04-2021.06</div>
                                <div>Alna</div>
                                <div className="font-bold color-dark-blue">Front End Academy</div>
                                <div className="font-italic">React JS, Tailwind CSS</div>
                            </div>
                            <div className="box pd-20 mg-20 border-pink sm-w-280">
                                <div className="font-bold">2021.02-2021.08</div>
                                <div>Women Go Tech</div>
                                <div className="font-bold color-pink">Front End track</div>
                                <div className="font-italic">Introduction to Full Stack, Front-End, Git, TypeScript, Testing, React JS</div>
                            </div>
                            <div className="box pd-20 mg-20 border-blue sm-w-280">
                                <div className="font-bold">2020.12-2021.05</div>
                                <div>Code Academy</div>
                                <div className="font-bold color-blue">Full Stack JavaScript Developer (900 h)</div>
                                <div className="font-italic">HTML5, CSS3, JavaScript, Bootstrap, GitHub, Express, MongoDb, Node JS,
                                    React JS
                                </div>
                            </div>
                            <div className="box pd-20 mg-20 border-orange sm-w-280">
                                <div className="font-bold">2020.06-2020.12</div>
                                <div className="font-bold color-orange">Self learning on Youtube, Coursera, Udemy</div>
                                <div className="font-italic">Laravel, React JS, Node JS</div>
                            </div>
                            <div className="box pd-20 mg-20 border-purple sm-w-280">
                                <div className="font-bold">2020.08-2020.11</div>
                                <div>Women Go Tech</div>
                                <div className="font-bold color-purple">Atrask Technologijas certificate</div>
                                <div className="font-italic">Basics of UX/UI, Testing, Cyber Security, Artificial
                                    Intelligence, Data Analytics, FinTech, Project Management
                                </div>
                            </div>
                            <div className="box pd-20 mg-20 border-green sm-w-280">
                                <div className="font-bold">2019.09-2020.06</div>
                                <div>Vilniaus technologijų mokymo centras</div>
                                <div className="font-bold color-green">Full Stack Web Development</div>
                                <div className="font-italic">HTML5, CSS3, Bootstrap, Php, Linux, Java, Android,
                                    Selenium
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex j-center align-center md-mt-100">
                    <div className="d-flex flex-wrap j-center w-80">
                        <img className="logo" src={htmlLogo} alt="logo"/>
                        <img className="logo" src={cssLogo} alt="logo"/>
                        <img className="logo" src={jsLogo} alt="logo"/>
                        <img className="logo" src={reactLogo} alt="logo"/>
                        <img className="logo" src={npmLogo} alt="logo"/>
                        <img className="logo" src={nodeLogo} alt="logo"/>
                        <img className="logo" src={mongodbLogo} alt="logo"/>
                        <img className="logo" src={expressjsLogo} alt="logo"/>
                        <img className="logo" src={bootstrapLogo} alt="logo"/>
                        <img className="logo" src={tailwindLogo} alt="logo"/>
                        <img className="logo" src={herokuLogo} alt="logo"/>
                        <img className="logo" src={sassLogo} alt="logo"/>
                        <img className="logo" src={githubLogo} alt="logo"/>
                        <img className="logo" src={seleniumLogo} alt="logo"/>
                        <img className="logo" src={phpLogo} alt="logo"/>
                        <img className="logo" src={laravelLogo} alt="logo"/>
                        <img className="logo" src={androidLogo} alt="logo"/>
                        <img className="logo" src={linuxLogo} alt="logo"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;