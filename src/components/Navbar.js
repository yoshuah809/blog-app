import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav>
				<div className="nav-center">
					<h3>blog </h3>
					<div className="nav-container"></div>
				</div>
			</nav>
			<Outlet />
		</>
	);
};
export default Navbar;
