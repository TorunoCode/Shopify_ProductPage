import "./navbar.scss";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="wrapper">
                    <span>Boo Dev</span>
                    <div className="social">
                        <a href="#">
                            <img src="/facebook.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="/instagram.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="/youtube.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="/dribbble.png" alt="" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
