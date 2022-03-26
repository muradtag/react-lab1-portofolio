import "./portofolio.css";
// const tempImg = require("../../images/no-image.jpg");
import Category from "./Category";

function Portofolio() {
	return (
		<div className="portofolio">
			<h1>PORTOFOLIO</h1>
			<div className="porto-container">
				<Category category="Web Design" />
				<Category category="Mobile Desgin" />
				<Category category="Logo Design" />
				<Category category="Web Application Development" />
				<Category category="Mobile Application Development" />
				<Category category="PWA Development" />
			</div>
		</div>
	);
}
export default Portofolio;
