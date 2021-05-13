import Typist from 'react-typist';
import profileImage from '../assets/profile_picture.png';
import cv from '../assets/CV_Jurgita_Adomaviciene.pdf';

function About({id}) {
    return (
        <div className="d-flex bg-shape md-direction-col md-pd-20" id={id}>
            <div className="w-50 mg-20 md-w-100">
                <div className="w-80p d-block margin-auto">
                    <h1 className="mg-0">Hi! I am Jurgita Adomavičienė -</h1>
                    <Typist cursor={{show: false}}>
                        <h1 className="color-yellow text-right text-shadow mg-0 mr-20">Full Stack JavaScript
                            Developer</h1>
                    </Typist>
                    <p className="my-20">Looking for challenges and opportunities in Web Development. I am free for
                        Intern's
                        or Junior JavaScript Developer's position.</p>
                    <div className="d-flex flex-wrap">
                        <div className="mr-20 mb-20">
                            <div className="font-bold">Email:</div>
                            <div><span className="e-mail" data-user="use.atigruj" data-website="moc.liamg"></span></div>
                        </div>
                        <div className="mr-20 mb-20">
                            <div className="font-bold">LinkedIn:</div>
                            <a href="https://www.linkedin.com/in/jurgita-adomaviciene/">https://www.linkedin.com/in/jurgita-adomaviciene/</a>
                        </div>
                        <div className="mr-20 mb-20">
                            <div className="font-bold">Github:</div>
                            <a href="https://github.com/Jurgitaesu">https://github.com/Jurgitaesu</a>
                        </div>
                    </div>
                    <div className="d-flex j-center">
                        <a href={cv} target="_blank" rel="noreferrer">
                            <button className="bg-yellow mr-20">Download CV</button>
                        </a>
                        <a href="https://github.com/Jurgitaesu" target="_blank" rel="noreferrer">
                            <button className="bg-black">Go to my Github</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-50 yellow md-w-100">
                <img src={profileImage} className="img-profile md-p-relative md-w-300" alt=""/>
            </div>
        </div>
    );
}

export default About;