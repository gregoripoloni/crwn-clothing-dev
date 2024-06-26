import styled from 'styled-components'

export const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px;
	margin: 0 7.5px;

	@media screen and (min-width: 480px) and (max-width: 839px) {
		grid-template-columns: repeat(2, 1fr);
		row-gap: 20px;
	}

	@media screen and (max-width: 479px) {
		grid-template-columns: repeat(1, 1fr);
		row-gap: 20px;
	}
`

export const CategoryTitle = styled.h2`
	font-size: 38px;
	margin-bottom: 25px;
	text-align: center;
`
