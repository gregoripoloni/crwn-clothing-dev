import './category.styles.scss'

const Category = ({ category }) => {
	const { imageUrl, title } = category;
	return (
		<div className="Category">
			<div className="Category-background" style={{
				backgroundImage: `url(${imageUrl})`
			}} />
			<div className="Category-body">
				<h2 className="Category-title">{title}</h2>
				<p className="Category-text">Shop Now</p>
			</div>
		</div>
	)
}

export default Category