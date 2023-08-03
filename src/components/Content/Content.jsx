import './Content.scss';
import img1 from '../../img/img1.jpg';

const Content = () => {
	return (
		<div className='content_container'>
			<div className='item'>
				<div className='item_top'>
					<img src={img1} />
				</div>
				<div className='item_bottom'>
					<h5>CAMDEN 160MM SANDAL</h5>
					<ul className='size'>
						<li>37</li>
						<li>38</li>
						<li>39</li>
						<li>40</li>
						<li>41</li>
						<li>42</li>
						<li>43</li>
					</ul>
					<span>140$</span>
					<button>SAVE ITEM</button>
				</div>
			</div>
			<div className='item'>item 2</div>
			<div className='item'>item 3</div>
			<div className='item'>item 4</div>
			<div className='item'>item 5</div>
			<div className='item'>item 6</div>
			<div className='item'>item 7</div>
			<div className='item'>item 8</div>
			<div className='item'>item 9</div>
			<div className='item'>item 10</div>
		</div>
	);
};

export default Content;
