import Auth from '../../utils/auth'
import { VscGear } from "react-icons/vsc";
import { NavBarWrapper, NavItems } from "../styles/helpers/Navbar.styled";

export const ButtonLogout = () => {
   
    return <>
    <button id='logout-btn'
    onClick={() => {
        Auth.logout()
        window.location='/'}}></button> 
    </>



}