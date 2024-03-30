import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CategoryItem } from '../../store/categories/category.types'

import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart } from '../../store/cart/cart.action'

import Button from '../button/button.component'

import { ProductCardContainer, Footer, Info } from './product-card.styles'

type ProductCardProps = {
	product: CategoryItem
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
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
				<Button onClick={addProductToCart}>Add to cart</Button>
			</Footer>
		</ProductCardContainer>
	)
}

export default ProductCard
