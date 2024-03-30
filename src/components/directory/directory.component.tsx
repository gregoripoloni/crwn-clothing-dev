import DirectoryItem from '../directory-item/directory-item.component'

import { DirectoryContainer } from './directory.styles'

export type HomeCategory = {
	id: number,
	title: string,
	imageUrl: string,
	route: string
}

const categories: HomeCategory[] = [
	{
		id: 1,
		title: 'hats',
		imageUrl: 'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-red-cap-wear-hip-hop-hat-model-front-view-png-image_10256546.png',
		route: 'shop/hats'
	},
	{
		id: 2,
		title: 'jackets',
		imageUrl: 'https://wguforlife.com/cdn/shop/products/CTJ131_carharttbrown_model_front_102018.png?v=1631114086',
		route: 'shop/jackets'
	},
	{
		id: 3,
		title: 'sneakers',
		imageUrl: 'https://sneakerrequest.com/cdn/shop/products/adidas-yeezy-qntm-lifestyle-model-sneakers-adidas-sneaker-request-811848.png?v=1702050791&width=800',
		route: 'shop/sneakers'
	},
	{
		id: 4,
		title: 'women',
		imageUrl: 'https://freepngimg.com/thumb/girl/23082-6-woman-model-transparent-background.png',
		route: 'shop/women'
	},
	{
		id: 5,
		title: 'men',
		imageUrl: 'https://static.vecteezy.com/system/resources/previews/028/680/061/original/beige-fashion-background-with-model-man-png.png',
		route: 'shop/men'
	}
]

const Directory = () => {
	return (
		<DirectoryContainer>
			{categories.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</DirectoryContainer>
	)
}

export default Directory
