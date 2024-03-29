import styled, { css } from 'styled-components'

const subColor = 'grey'
const mainColor = 'black'

const shrinkLabelStyles = css`
	top: -20px;
	font-size: 12px;
	color: ${mainColor};
`

type FormInputLabelProps = {
	$shrink?: boolean
}

export const FormInputLabel = styled.label<FormInputLabelProps>`
	color: ${subColor};
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 15px;
	top: 12px;
	transition: .2s;

	${({$shrink}) => $shrink && shrinkLabelStyles};
`

export const Input = styled.input`
	background: none;
	background-color: #F5F6F9;
	color: ${mainColor};
	font-size: 16px;
	font-family: 'Poppins';
	padding: 10px 15px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 8px;
	border: 2px solid transparent;
	margin: 25px 0;
	transition: border-color .2s;

	&:focus {
		outline: none;
		border-color: #E4E6EC;
	}

	&:focus ~ ${FormInputLabel} {
		${shrinkLabelStyles}
	}
`

export const Group = styled.div`
	position: relative;
	margin: 45px 0;

	input[type='password'] {
		letter-spacing: 0.3em;
	}
`
