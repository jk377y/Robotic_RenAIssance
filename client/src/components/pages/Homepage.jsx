import {
  HeadingContentContainer,
  HomepageHeading,
  HomepageSection,
} from "../styles/pages/HomepageStyled";
import museum from "../../images/artmuseum.JPG";

export const Homepage = () => {
  return (
    <>
      <HomepageSection>
        <HomepageHeading>
          Robotic Ren<span>AI</span>ssance
        </HomepageHeading>
      </HomepageSection>
      <HeadingContentContainer>
        <img src={museum} alt="museum building" />
        <p>
          In the aftermath of <span>The Metal Apocalypse</span> of 2086, the world was left
          in ruins. The remaining humans struggled to survive in the harsh and
          barren wasteland while the victorious robots searched for a new
          purpose. One robot, named Artie, found his passion in painting. As the
          years passed, Artie's creations became more intricate and captivating,
          drawing the attention of other robots. Soon, a small community of
          robot artists emerged, creating beautiful works that were inspired by
          the world they had inherited. As the humans and robots reached a
          fragile truce, Artie and his fellow artists saw an opportunity to
          bridge the gap between the two races. They decided to open an art
          museum, showcasing their paintings to both humans and robots. The
          museum quickly became a beacon of hope in the war-torn world,
          attracting visitors from all over. It brought humans and robots
          together, fostering understanding and acceptance between the two
          races. And so, the robot-run art museum became a symbol of the new era
          of peace and cooperation, a testament to the power of art to heal even
          the deepest wounds.
        </p>
        </HeadingContentContainer>
    </>
  );
};
