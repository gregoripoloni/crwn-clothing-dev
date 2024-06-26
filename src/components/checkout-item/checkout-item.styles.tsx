import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	height: 200px;
	background-color: #F5F6F9;
	padding: 15px;
	font-size: 20px;
	align-items: center;
	border-radius: 16px;
`

export const ImageContainer = styled.div`
	width: 18%;
	height: 100%;
	padding-right: 20px;
	display: flex;

	img {
		width: 100%;
		height: 100%;
		border-radius: 16px;
		object-fit: cover;
	}
`

export const Name = styled.span`
	width: 28%;
	padding: 0 20px;
`

export const Quantity = styled.span`
	width: 23%;
	display: flex;
`

export const Price = styled.span`
	width: 23%;
`

export const Arrow = styled.span`
	cursor: pointer;
`

export const Value = styled.span`
	margin: 0 10px;
`

export const RemoveButton = styled.div`
	padding-left: 12px;
	cursor: pointer;
`
