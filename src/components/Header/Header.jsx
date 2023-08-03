import { useState } from 'react';
import SubHeader from './SubHeader/SubHeader';
import SubHeaderSort from './SubHeaderSort/SubHeaderSort';
import useScrollDirection from '../../helpers/useScrollDirection';

import { PiSuitcaseSimpleThin } from 'react-icons/pi';
import { PiBookmarkSimpleThin } from 'react-icons/pi';
import { CiSearch } from 'react-icons/ci';
import './Header.scss';

const Header = () => {
	const scrollDirection = useScrollDirection();

	const [active, setActive] = useState(null);

	let dataLeft = [
		{ title: 'MAN', id: 1 },
		{ title: 'WOMAN', id: 2 },
		{ title: 'EXPLORE', id: 3 },
	];

	let dataRight = [
		{ title: 'CLIENT SERVICES', id: 4 },
		{ title: 'LOGIN', id: 5 },
	];

	return (
		<div>
			<header className='header_container'>
				<div className='nav_block'>
					<div className='header_left_block'>
						<ul>
							{dataLeft.map(item => {
								return (
									<li
										key={item.title}
										onClick={() => setActive(item.id)}
										className={active === item.id ? 'active' : ''}
									>
										{item.title}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div className='title'>
					<p>GETONEMORE</p>
				</div>
				<div className='header_right_block'>
					<div>
						<ul>
							{dataRight.map(item => {
								return (
									<li
										key={item.id}
										onClick={() => setActive(item.id)}
										className={active === item.id ? 'active' : ''}
									>
										{item.title}
									</li>
								);
							})}
						</ul>
					</div>
					{scrollDirection === 'down' ? (
						<CiSearch className='header_right_icon' />
					) : null}
					<PiBookmarkSimpleThin className='header_right_icon' />
					<PiSuitcaseSimpleThin className='header_right_icon' />
				</div>
			</header>
			<SubHeader scrollDirection={scrollDirection} />
			<SubHeaderSort />
		</div>
	);
};

export default Header;
