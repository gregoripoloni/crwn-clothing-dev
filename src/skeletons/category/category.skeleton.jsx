import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './category.skeleton.scss'

const CategorySkeleton = ({categories}) => {
	return Array(categories).fill(0).map(item => (
			<div className="CategorySkeleton">
				<div className="CategorySkeleton-background">
					<Skeleton height={240} />
				</div>
				<div className="CategorySkeleton-body">
					<h2 className="CategorySkeleton-title">
						<Skeleton width={50} />
					</h2>
					<p className="CategorySkeleton-text">
						<Skeleton width={70} />
					</p>
				</div>
			</div>
		)
	)
}

export default CategorySkeleton;