import "./skills.css";
import ProgressBar from "react-bootstrap/ProgressBar";

function Skills() {
	let progressStyle = {
		margin: "10px 0",
		height: "5px",
		backgroundColor: "grey",
	};
	return (
		<div className="skills">
			<h1 className="white">SKILLS</h1>
			<div className="skills-container">
				<div className="left-skills">
					<div className="focus white">
						<h2>MY FOCUS</h2>
						<hr />
						<ul className="list">
							<li>UI/UX Design</li>
							<li>Responsive Design</li>
							<li>Web Design</li>
							<li>Backend Development</li>
						</ul>
					</div>
				</div>
				<div className="right-skills" style={{ width: "50%" }}>
					<p className="att">HTML</p>
					<ProgressBar now={80} variant="danger" style={progressStyle} />
					<p className="att">CSS</p>
					<ProgressBar now={90} variant="danger" style={progressStyle} />
					<p className="att">JavaScript</p>
					<ProgressBar now={95} variant="danger" style={progressStyle} />
					<p className="att">React</p>
					<ProgressBar now={90} variant="danger" style={progressStyle} />
					<p className="att">Node.js</p>
					<ProgressBar now={85} variant="danger" style={progressStyle} />
					<p className="att">MongoDB</p>
					<ProgressBar now={75} variant="danger" style={progressStyle} />
				</div>
			</div>
		</div>
	);
}

export default Skills;
