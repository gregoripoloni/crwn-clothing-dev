import styled from 'styled-components'

export const AuthenticationContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 900px;
	margin: 30px auto;

	@media screen and (max-width: 839px) {
		flex-direction: column;
		width: auto;
		align-items: center;
		row-gap: 60px;
		margin: 30px 7.5px;
	}
`
