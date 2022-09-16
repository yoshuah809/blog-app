import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const NavBrand = styled(Link)`
	flex-grow: 1;
	font-size: 28px;
	font-weight: 700;
	color: #fff;
	text-decoration: none;
`;

export const StyledNavbar = styled.nav`
	display: flex;
	justify-content: center;
	padding: 20px;
	margin-bottom: 40px;

	@media (max-width: 786px) {
		flex-direction: column;
	}
`;
export const NavItems = styled.ul`
	list-style: none;
	text-decoration: none;
	display: flex;
	padding: 0 10%;
	align-items: center;
	justify-content: center;
`;
export const NavItem = styled(Link)`
	cursor: pointer;
	transition: 250ms;
	cursor: pointer;
	font-weight: 700;
	font-size: 24px;
	color: #fff;
	text-decoration: none;
	display: flex;
	padding: 5px 10px 5px;

	&:hover {
		border: 1px solid #fff;
		border-radius: 0.35rem;
		box-shadow: 1px 3px #fff;
	}
`;

const Navbar = () => {
	return (
		<>
			{/*Navigation */}
			<StyledNavbar>
				<NavItems>
					<NavItem to="/">Blog</NavItem>
					<NavItem to="/about">About</NavItem>
					<NavItem to="/articles">Article List</NavItem>
				</NavItems>
			</StyledNavbar>
			<Outlet />
		</>
	);
};
export default Navbar;
