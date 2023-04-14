import { NavBarWrapper, NavItems } from "../styles/helpers/Navbar.styled";
import { VscGear } from "react-icons/vsc";
import ToolTip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";

import { ButtonLogout } from "./ButtonLogout";
import Auth from '../../utils/auth'

export const NavBar = () => {
    if (!Auth.loggedIn()) {
        return (
            <>
            <NavBarWrapper>
                            
            <div style={{ display: "flex", alignItems: "center", marginRight: "auto" }}>
                    <Link to="/" style={{ marginRight: "20px", fontFamily: 'Orbitron' }}>Home</Link>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
    
    <Link to="/showcase" style={{ fontFamily: 'Orbitron', marginRight: "20px" }}>Showcase</Link>
    <Link to="/about" style={{ fontFamily: 'Orbitron', marginRight: "20px" }}>About us</Link>
                </div>
            
                <NavItems>
                    <ToolTip title={<h2 style={{ fontFamily: 'Orbitron' }}>Click to Login or Register</h2>} placement="left" arrow>
                        <Link to="/login"><VscGear style={{ stroke: "url(#blue-gradient)" }} /></Link> 
                    </ToolTip>
                </NavItems>
            </NavBarWrapper>
        </>
        )
    } else {
        return (
            <><NavBarWrapper>
                              
            <div style={{ display: "flex", alignItems: "center", marginRight: "auto" }}>
                    <Link to="/" style={{ marginRight: "20px", fontFamily: 'Orbitron' }}>Home</Link>
            </div>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
    
    <Link to="/showcase" style={{ fontFamily: 'Orbitron', marginRight: "20px" }}>Showcase</Link>
    <Link to="/about" style={{ fontFamily: 'Orbitron', marginRight: "20px" }}>About us</Link>
    {Auth.loggedIn() && <ButtonLogout />}
  </div>
  <NavItems>
    <ToolTip title={<h2 style={{ fontFamily: 'Orbitron' }}>Click to Login or Register</h2>} placement="left" arrow>
      <Link to="/login"><VscGear style={{ stroke: "url(#blue-gradient)" }} /></Link> 
    </ToolTip>
  </NavItems>
</NavBarWrapper>

        </>
        )
    }
    
}


// import { NavBarWrapper, NavItems } from "../styles/helpers/Navbar.styled";
// import { VscGear } from "react-icons/vsc";
// import ToolTip from '@mui/material/Tooltip';
// import { Link } from "react-router-dom";

// import { ButtonLogout } from "./ButtonLogout";
// import Auth from '../../utils/auth'

// export const NavBar = () => {
//     if (!Auth.loggedIn()) {
//         return (
//             <>
//             <NavBarWrapper>
//                 <div style={{ display: "flex", alignItems: "center", marginRight: "auto" }}>
//                     <Link to="/" style={{ marginRight: "20px", fontFamily: 'Orbitron' }}>Home</Link>
//                     <Link to="/showcase" style={{ fontFamily: 'Orbitron', marginRight: "20px" }}>Showcase</Link>
//                     <Link to="/about" style={{ fontFamily: 'Orbitron', marginRight: "20px" }}>About us</Link>
//                 </div>
            
    
//                 <NavItems>
//                     <ToolTip title={<h2 style={{ fontFamily: 'Orbitron' }}>Click to Login or Register</h2>} placement="left" arrow>
//                         <Link to="/login"><VscGear style={{ stroke: "url(#blue-gradient)" }} /></Link> 
//                     </ToolTip>
//                 </NavItems>
//             </NavBarWrapper>
//         </>
//         )
//     } else {
//         return (
//             <>
//             <NavBarWrapper>
//                 <div style={{ display: "flex", alignItems: "center", marginRight: "auto" }}>
//                     <Link to="/" style={{ marginRight: "20px", fontFamily: 'Orbitron' }}>Home</Link>
//                     <Link to="/showcase" style={{ fontFamily: 'Orbitron', marginRight: "20px" }}>Showcase</Link>
//                     <Link to="/about" style={{ fontFamily: 'Orbitron', marginRight: "20px" }}>About us</Link>
//                     < ButtonLogout />
//                 </div>
            
    
//                 <NavItems>
//                     <ToolTip title={<h2 style={{ fontFamily: 'Orbitron' }}>Click to Login or Register</h2>} placement="left" arrow>
//                         <Link to="/login"><VscGear style={{ stroke: "url(#blue-gradient)" }} /></Link> 
//                     </ToolTip>
//                 </NavItems>
//             </NavBarWrapper>
//         </>
//         )
//     }
    
// }