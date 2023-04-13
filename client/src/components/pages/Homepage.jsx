import styled from 'styled-components';
import { HomepageHeading, HomepageSection } from "../styles/pages/HomepageStyled";
import "../styles/pages/homepage.css";
import museum from '../../images/artmuseum.JPG';

const SemiTransparentBox = styled.div`
  position: absolute;
  bottom: 90px;
  left: 30px;
  height: 228px; 
  background-color: rgba(255, 255, 255, 0.5);
`;

// const styles = {
//   width: "17%"
// }

export const Homepage = () => {
  return (
    <>
      <HomepageSection>
        <HomepageHeading>Robotic Ren<span>AI</span>ssance</HomepageHeading>
      </HomepageSection>
      <div className="container"></div> 
      <SemiTransparentBox>
        <img src={museum} alt="museum building" />
      </SemiTransparentBox>
    </>
  )
}
