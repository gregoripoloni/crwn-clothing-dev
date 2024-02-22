import styled from 'styled-components'

import { SpinnerContainer } from '../spinner/spinner.styles'

export const BaseButton = styled.button`
	min-width: 130px;
	width: auto;
	height: 35px;
	line-height: 35px;
	padding: 0 20px 0 20px;
	font-size: 15px;
	background-color: black;
	color: white;
	font-family: 'Poppins';
	font-weight: bolder;
	border: 1px solid transparent;
	border-radius: 10px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color .2s, border-color .2s;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}

	&:disabled {
		pointer-events: none;
	}
`

export const GoogleSignInButton = styled(BaseButton)`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: white;
		color: #4285f4;
		border: 1px solid #4285f4;
	}
`

export const InvertedButton = styled(BaseButton)`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`

export const ButtonSpinner = styled(SpinnerContainer)`
	border-top-color: white;
	width: 20px;
	height: 20px;
`
