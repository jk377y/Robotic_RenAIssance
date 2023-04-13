import { HomepageHeading, HomepageSection } from "../styles/pages/HomepageStyled"
import "../styles/pages/homepage.css";
// import museum from '../../images/artmuseum.JPG'


// const styles = {
//     width: "50%"
// }

export const Homepage = () => {
    return <>
    
    <HomepageSection>
    <HomepageHeading>Robotic Ren<span>AI</span>ssance</HomepageHeading>
    </HomepageSection>
     <div className="container">{/*<img src={museum} styles={styles} alt="museum building" />*/}</div> 
    

    </>
    
}
