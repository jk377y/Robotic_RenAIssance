import { NavBarWrapper, NavIcon, NavItems } from "../styles/helpers/Navbar.styled";
import { VscGear } from "react-icons/vsc";


export const NavBar = () => {
    return <>
    <NavBarWrapper>
        <NavItems>
            <a href="#" title="Login/Register"><VscGear /></a> 
        </NavItems>
    </NavBarWrapper>
    </>
}