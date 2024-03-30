import { FC } from 'react'

import { CategoryItem } from '../../store/categories/category.types'

import ProductCard from '../product-card/product-card.component'

import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles'

type CategoryPreviewProps = {
	title: string,
	items: CategoryItem[]
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, items }) => {
	return (
		<CategoryPreviewContainer>
			<h2>
					<Title to={title}>{title.toUpperCase()}</Title>
			</h2>
			<Preview>
				{
					items.filter((_, idx) => idx < 4)
					.map((product) =>
						<ProductCard key={product.id} product={product} />
					)
				}
			</Preview>
		</CategoryPreviewContainer>
	)
}

export default CategoryPreview
