import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'

import { DirectoryItemContainer, Body } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
	const { imageUrl, title, route } = category;
	const navigate = useNavigate();
	const onNavigateHandler = () => navigate(route);
	return (
		<DirectoryItemContainer onClick={onNavigateHandler} $imageurl={imageUrl}>
			<Body>
				<h2>{title}</h2>
				<Button>Shop now</Button>
			</Body>
		</DirectoryItemContainer>
	)
}

export default DirectoryItem