import { Fragment } from 'react'
import { useSelector } from 'react-redux'

import { selectCategoriesMap, selectIsCategoriesIsLoading } from '../../store/categories/category.selector'

import CategoryPreview from '../../components/category-preview/category-preview.component'
import Spinner from '../../components/spinner/spinner.component'

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap)
	const isLoading = useSelector(selectIsCategoriesIsLoading)

	return (
		<Fragment>
			{ isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoriesMap).map(title =>
					<CategoryPreview key={title} title={title} items={categoriesMap[title]} />
				)
			)}
		</Fragment>
	)
}

export default CategoriesPreview
