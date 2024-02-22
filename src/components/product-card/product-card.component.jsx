import { useSelector, useDispatch } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart } from '../../store/cart/cart.action'

import Button from '../button/button.component'

import { ProductCardContainer, Footer, Info } from './product-card.styles'

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product
	const distach = useDispatch()

	const cartItems = useSelector(selectCartItems)

	const addProductToCart = () => distach(addItemToCart(cartItems, product))

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={name}/>
			<Footer>
				<Info>
					<span>{name}</span>
					<span>${price}</span>
				</Info>
				<Button onClick={addProductToCart}>Add to card</Button>
			</Footer>
		</ProductCardContainer>
	)
}

export default ProductCard