import styled from 'styled-components'

export const CartItemContainer = styled.div`
	width: 100%;
	display: flex;
	height: 80px;

	img {
		width: 30%;
		border-radius: 8px;
	}
`

export const ItemDetails = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px 20px;
`

export const Name = styled.span`
	font-size: 16px;
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`
