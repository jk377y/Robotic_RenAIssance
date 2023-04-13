import styled from "styled-components";
import {
	HomepageHeading,
	HomepageSection,
} from "../styles/pages/HomepageStyled";
import "../styles/pages/homepage.css";
import james from "../../images/avatars/james.JPG";
import tracy from "../../images/avatars/tracy.png";

const SemiTransparentBox = styled.div`
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: rgba(127, 63, 191, 0.5);
	padding: 30px;
	border-radius: 30px;
`;
const Container = styled.div`
	width: 150px;
	height: 150px;
	background-color: #fff;
	margin: 20px;
	border-radius: 10px;
`;

const styles = {
	textAlign: "center",
};

export const About = () => {
	return (
		<>
			<div className="container"></div>
			<HomepageSection>
				<HomepageHeading>
					Robotic Ren<span>AI</span>ssance
				</HomepageHeading>
				<SemiTransparentBox>
					<h1 style={styles}>About Us</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Accusamus quod eos nobis porro dolores deleniti
						qui veritatis deserunt, ratione saepe molestias
						cupiditate, error eaque officia nostrum at vel
						accusantium facere?
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>

						<Container><a href="https://jk377y.dev" target="_blank" rel="noreferrer" >
								<img src={james} alt="jamesAvatar" title="James Kelly" style={{ width: "100%", height: "100%" }} /></a>
						</Container>

						<Container />
						<Container />
						<Container />
						<Container>
							<a href="https://github.com/TMortara" target="_blank" rel="noreferrer" >
							<img src={tracy} alt="tracyAvatar" title="Tracy Mortara" style={{ width: "100%", height: "100%" }} /></a>
						</Container>
					</div>
				</SemiTransparentBox>
			</HomepageSection>
		</>
	);
};
