import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
	margin-left: 7.5px;
	margin-right: 7.5px;
`

export const Title = styled(Link)`
	font-size: 28px;
	margin-bottom: 25px;
	cursor: pointer;
`

export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 20px;

	@media screen and (min-width: 480px) and (max-width: 839px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 479px) {
		grid-template-columns: repeat(1, 1fr);
	}
`
