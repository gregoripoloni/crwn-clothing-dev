import styled from 'styled-components'

export const Body = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h2 {
		font-weight: bold;
		margin: 0 6px 0;
		font-size: 22px;
		text-transform: uppercase;
	}
`

type DirectoryItemContainerProps = {
	$imageurl: string
}

export const DirectoryItemContainer = styled.div<DirectoryItemContainerProps>`
	min-width: 30%;
	height: 335px;
	flex: 1 1 auto;
	display: flex;
	align-items: end;
	justify-content: space-between;
	border-radius: 16px;
	margin: 0 7.5px 15px;
	overflow: hidden;
	background-color: #F5F6F9;
	background-image: ${({$imageurl}) => `url(${$imageurl})`};
	background-size: auto 100%;
	background-repeat: no-repeat;
	background-position: center;
	transition: background-size .2s, background-color .2s;

	&:hover {
		cursor: pointer;
		background-size: auto 110%;
		background-color: #ECEEF2;
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	@media screen and (max-width: 839px) {
		height: 300px;
	}
`
