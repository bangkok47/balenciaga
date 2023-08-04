import { itemsData } from '../../assets/itemsData';
import './Content.scss';
import ShoeItem from './ShoeItem/ShoeItem';

const Content = () => {
	return (
		<div className='content_container'>
			{itemsData.map(obj => {
				return (
					<ShoeItem
						key={obj.id}
						id={obj.id}
						img={obj.imageUrl}
						title={obj.title}
						sizes={obj.sizes}
						price={obj.price}
					/>
				);
			})}
		</div>
	);
};

export default Content;
