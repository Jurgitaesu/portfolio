const FontAwesome = require('react-fontawesome');

function Skills({id}) {
    return (
        <div className="my-100" id={id}>
            <h1 className="color-yellow text-center text-shadow">SOFT SKILLS</h1>
            <div className="d-flex j-center">
                <ul>
                    <li><span className="mr-20 color-yellow"><FontAwesome className="fas fa-check"/></span>Willingness to
                        learn
                    </li>
                    <li><span className="mr-20 color-yellow"><FontAwesome className="fas fa-check"/></span>Flexible</li>
                    <li><span className="mr-20 color-yellow"><FontAwesome className="fas fa-check"/></span>Good at time
                        planing
                    </li>
                    <li><span className="mr-20 color-yellow"><FontAwesome className="fas fa-check"/></span>Emphatic</li>
                    <li><span className="mr-20 color-yellow"><FontAwesome className="fas fa-check"/></span>Communicative
                    </li>
                    <li><span className="mr-20 color-yellow"><FontAwesome className="fas fa-check"/></span>Attentive to
                        details
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;