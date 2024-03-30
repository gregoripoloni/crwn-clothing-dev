import styled from 'styled-components'

export const SpinnerOverlay = styled.div`
	height: 60vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const SpinnerContainer = styled.div`
	display: inline-block;
	width: 50px;
	height: 50px;
	border: 3px solid transparent;
	border-radius: 50%;
	border-top-color: black;
	animation: spin .5s infinite;
	-webkit-animation: spin .5s infinite;
	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`
