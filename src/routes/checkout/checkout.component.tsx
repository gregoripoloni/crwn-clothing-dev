import { useSelector } from 'react-redux'

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import PaymentForm from '../../components/payment-form/payment-form.component'

import { CheckoutContainer, CheckoutPaymentContainer, CheckoutItemsContainer, CheckoutHeader, HeaderBlock, Title } from './checkout.styles'

const Checkout = () => {
	const cartItems = useSelector(selectCartItems)
	const cartTotal = useSelector(selectCartTotal)

	return (
		<CheckoutContainer>
			<CheckoutPaymentContainer>
				<Title><b>Total</b> ${cartTotal}</Title>
				<PaymentForm />
			</CheckoutPaymentContainer>
			<CheckoutItemsContainer>
				<Title><b>Items</b></Title>
				<CheckoutHeader>
					<HeaderBlock>
						<span>Product</span>
					</HeaderBlock>
					<HeaderBlock>
						<span>Description</span>
					</HeaderBlock>
					<HeaderBlock>
						<span>Quantity</span>
					</HeaderBlock>
					<HeaderBlock>
						<span>Price</span>
					</HeaderBlock>
					<HeaderBlock>
						<span>Remove</span>
					</HeaderBlock>
				</CheckoutHeader>
				{cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
			</CheckoutItemsContainer>
		</CheckoutContainer>
	)
}

export default Checkout
