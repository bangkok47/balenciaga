import './ShoeItem.scss';

const ShoeItem = ({ id, img, title, sizes, price }) => {
	return (
		<div className='item'>
			<div className='item_top'>
				<img src={img} alt='Shoes' />
			</div>
			<div className='item_bottom'>
				<h5>{title}</h5>
				<ul className='size'>
					{sizes.map((size, i) => {
						return <li key={i}>{size}</li>;
					})}
				</ul>
				<span>{price}$</span>
				<button className='add_btn'>SAVE ITEM</button>
			</div>
		</div>
	);
};

export default ShoeItem;
