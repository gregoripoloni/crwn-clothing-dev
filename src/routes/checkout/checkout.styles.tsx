import styled from 'styled-components'

export const CheckoutContainer = styled.div`
	min-height: 90vh;
	display: flex;
	justify-content: space-between;
	margin: 50px 7.5px 0;
`

export const CheckoutPaymentContainer = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	row-gap: 20px;
`

export const CheckoutItemsContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 20px;
`

export const CheckoutHeader = styled.div`
	width: 100%;
	padding: 10px 15px;
	display: flex;
	justify-content: space-between;
`

export const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;

	&:first-child {
		width: 18%;
	}

	&:nth-child(2) {
		width: 28%;
		padding-left: 20px;
	}

	&:last-child {
		width: 8%;
	}
`

export const Title = styled.span`
	width: 100%;
	margin-top: 30px;
	font-size: 36px;
	display: inline-flex;
	justify-content: space-between;
`
