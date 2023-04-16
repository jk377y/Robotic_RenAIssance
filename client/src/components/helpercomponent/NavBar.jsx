
import { NavBarWrapper, NavItems } from "../styles/helpers/Navbar.styled";
import { VscGear } from "react-icons/vsc";
import ToolTip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";

import Auth from '../../utils/auth'

const linkStyle = {
    fontFamily: 'Orbitron',
    marginRight: '20px',
    borderRadius: '50px',
    padding: '10px 10px',
    backgroundColor: '#fff',
    color: '#000',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    cursor: 'pointer',
};

export const NavBar = () => {
    const isLoggedIn = Auth.loggedIn();

    return (
        <>
            <NavBarWrapper>
                <div style={{ display: "flex", alignItems: "center", marginRight: "auto" }}>
                    <Link
                        to="/"
                        style={{
                            ...linkStyle, marginRight: "20px",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                            transition: "box-shadow 0.3s ease-in-out",
                        }}
                        onMouseOver={(e) => (e.target.style.boxShadow = "0 0 10px rgba(0, 191, 255, 0.5)")}
                        onMouseOut={(e) => (e.target.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)")}
                    >
                        Home
                    </Link>

                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>

                    <Link
                        to="/showcase"
                        style={{
                            ...linkStyle,
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                            transition: "box-shadow 0.3s ease-in-out",
                        }}
                        onMouseOver={(e) => (e.target.style.boxShadow = "0 0 10px rgba(0, 191, 255, 0.5)")}
                        onMouseOut={(e) => (e.target.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)")}
                    >
                        Showcase
                    </Link>

                    <Link
                        to="/about"
                        style={{
                            ...linkStyle, marginRight: "20px",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                            transition: "box-shadow 0.3s ease-in-out",
                        }}
                        onMouseOver={(e) => (e.target.style.boxShadow = "0 0 10px rgba(0, 191, 255, 0.5)")}
                        onMouseOut={(e) => (e.target.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)")}
                    >
                        About
                    </Link>

                    {isLoggedIn && (
                        <NavItems>
                            <ToolTip title={<h2 style={{ fontFamily: 'Orbitron' }}>Logout</h2>} placement="bottom" arrow>
                                <Link to="/"><VscGear onClick={() => Auth.logout()} /></Link>
                            </ToolTip>
                        </NavItems>
                    )}
                </div>
                {!isLoggedIn && (
                    <NavItems>
                        <ToolTip title={<h2 style={{ fontFamily: 'Orbitron' }}>Click to Login or Register</h2>} placement="bottom" arrow>
                            <Link to="/login"><VscGear /></Link>
                        </ToolTip>
                    </NavItems>
                )}
            </NavBarWrapper>
        </>
    )
}



