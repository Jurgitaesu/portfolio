const FontAwesome = require('react-fontawesome');

function Footer() {
    return (
        <div className="d-flex j-center py-100 font-50 bg-black md-py-30 md-font-30">
            <a href="https://www.linkedin.com/in/jurgita-adomaviciene/" className="color-white mg-20"><FontAwesome
                className="fab fa-linkedin"/></a>
            <a href="https://github.com/Jurgitaesu" className="color-white mg-20"><FontAwesome
                className="fab fa-github"/></a>
        </div>
    );
}

export default Footer;