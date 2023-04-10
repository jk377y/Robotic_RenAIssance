import { NavBarWrapper, NavIcon, NavItems } from "../styles/helpers/Navbar.styled";
import { VscGear } from "react-icons/vsc";
import ToolTip from '@mui/material/Tooltip';


export const NavBar = () => {
    return <>
    <NavBarWrapper>
        <NavItems>
        <ToolTip title={<h2>Click to Login or Register</h2>} placement="left" arrow>
        <a href="/login" target="_blank"><VscGear style={{ stroke: "url(#blue-gradient)" }}/></a> 
        </ToolTip> 
        </NavItems>
    </NavBarWrapper>   
    </>

}
