import { CiSearch } from 'react-icons/ci';
import './SubHeader.scss';

const SubHeader = ({ scrollDirection }) => {
	return (
		<div
			className={`subheader_container ${
				scrollDirection === 'down' ? 'hide' : 'show'
			}`}
		>
			<CiSearch className='search_icon' />
			<input
				className='header_search_input'
				placeholder='WHAT ARE YOU LOOKING FOR?'
			/>
		</div>
	);
};

export default SubHeader;
