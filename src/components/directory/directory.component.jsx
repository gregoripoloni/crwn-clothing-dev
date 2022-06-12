import CategorySkeleton from '../../skeletons/category/category.skeleton'
import Category from '../category/category.component'

import './directory.styles.scss'

const Directory = ({ categories }) => {
	return (
		<div className="Directory">
			{categories && categories.map((category) => (
				<Category key={category.id} category={category} />
			))}
			{!categories && <CategorySkeleton categories={5} />}
		</div>
	)
}

export default Directory