import { HomepageHeading, HomepageSection } from "../styles/pages/HomepageStyled";
import "../styles/pages/homepage.css";

const styles= {
textAlign: "center",
}

export const About = () => {
    return (
        <>
            <div className="container">
            </div>
            <HomepageSection>
                <HomepageHeading>Robotic Ren<span>AI</span>ssance</HomepageHeading>
                <h1 style={styles}>About Us</h1>

            </HomepageSection>
        </>
    );
};
