import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
	display: flex;
	align-items: center;
	height: 100%;
	width: 60px;
	margin-left: 20px;

	transition: transform .2s;

	&:active {
		transform: scale(0.95);
	}
`

export const NavLinks = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

export const NavLink = styled(Link)`
	font-weight: bold;
	padding: 10px 15px;
	cursor: pointer;

	transition: transform .2s;

	&:active {
		transform: scale(0.95);
	}
`
