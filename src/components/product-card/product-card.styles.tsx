import styled from "styled-components";

export const ProductCardContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	img {
		width: 100%;
		height: 335px;
		object-fit: cover;
		margin-bottom: 10px;
		border-radius: 16px;
	}
`

export const Footer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;

	& button {
		width: 100%;
	}
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`
