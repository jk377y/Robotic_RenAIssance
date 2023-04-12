import { NavBarWrapper, NavIcon, NavItems } from "../styles/helpers/Navbar.styled";
import { VscGear } from "react-icons/vsc";
import ToolTip from '@mui/material/Tooltip';

export const NavBar = () => {
    return <>
        <NavBarWrapper>
            <div style={{ display: "flex", alignItems: "center", marginRight: "auto" }}>
                <a href="/" style={{ marginRight: "20px", fontFamily: 'Orbitron' }}>Home</a>
                <a href="/showcase" style={{ fontFamily: 'Orbitron', marginRight: "20px" }}>Showcase</a>
                <a href="/us" style={{ fontFamily: 'Orbitron', marginRight: "20px" }}>About us</a>
            </div>

            <NavItems>
                <ToolTip title={<h2 style={{ fontFamily: 'Orbitron' }}>Click to Login or Register</h2>} placement="left" arrow>
                    <a href="/login"><VscGear style={{ stroke: "url(#blue-gradient)" }} /></a>
                </ToolTip>
            </NavItems>
        </NavBarWrapper>
    </>
}


