import styled from 'styled-components'
import Button from '../button/button.component'

export const PaymentFormContainer = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const FormContainer = styled.form`
	width: 100%;
	height: 100px;
`

export const PaymentButton = styled(Button)`
	margin-left: auto;
	margin-top: 30px;
`
