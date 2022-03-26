import "./fotter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faContactCard,
	faL,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faTwitter,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
	let iconStyle = {
		padding: "7px",
		fontSize: "1.5rem",
		cursor: "pointer",
	};
	return (
		<div className="footer">
			<div className="left-footer">
				<h5>GET IN TOUCH</h5>
				<p>
					<FontAwesomeIcon icon={faEnvelope} /> murad.tag.97@gmail.com
				</p>
				<p>
					<FontAwesomeIcon icon={faContactCard} /> (+20) 155-473-0949
				</p>
			</div>
			<div className="mid-footer">
				<button className="footer-btn"> CONTACT ME</button>
			</div>
			<div className="right-footer">
				<FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
				<FontAwesomeIcon icon={faFacebook} style={iconStyle} />
				<FontAwesomeIcon icon={faTwitter} style={iconStyle} />
			</div>
		</div>
	);
}

export default Footer;
