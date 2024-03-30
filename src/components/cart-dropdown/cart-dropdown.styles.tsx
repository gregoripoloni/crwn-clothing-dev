import styled from 'styled-components'
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles'

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 20px;
	padding: 20px;
	border-radius: 16px;
	background-color: white;
	top: 90px;
	right: 40px;
	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
	z-index: 5;

	${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
		margin-top: auto;
	}
`

export const CartItems = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	border-radius: 8px;
	gap: 15px;
`

export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 50px auto;
`
