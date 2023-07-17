import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);
	const clearItemHandler = () => clearItemFromCart(cartItem);

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt={`${name}`}/>
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<span onClick={removeItemHandler} className='arrow'>
					&#10094;
				</span>
				<span className='value'>{quantity}</span>
				<span onClick={addItemHandler} className='arrow'>
					&#10095;
				</span>
			</span>
			<span className='price'>{price}</span>
			<div onClick={clearItemHandler} className='remove-button'>&#10005;</div>
		</div>
	)
}

export default CheckoutItem;