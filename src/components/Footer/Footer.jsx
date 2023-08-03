import './Footer.scss';

const Footer = () => {
	let footerData = [
		{
			title: 'NEWSLETTER',
			data: ['Subscribe to our newsletter'],
		},
		{
			title: 'CLIENT SERVICES',
			data: ['Track Order', 'Returns', 'Delivery', 'Payment'],
		},
		{
			title: 'THE COMPANY',
			data: [
				'Careers',
				'Careers - Design',
				'Legal',
				'Privacy Policy and Cookies',
				'Cookies Settings',
				'World Food Programme',
			],
		},
		{
			title: 'CONNECT',
			data: ['Facebook', 'Instagram', 'Tiktok', 'Spotify'],
		},
		{
			title: 'BOUTIQUES',
			data: ['Find a store neardy', 'Country / Region', 'English'],
		},
		{
			title: 'CONTACT US',
			data: [
				'Mon-Sat 9:30am - 7pm',
				'Whatsapp +44 20 30 12 34',
				'+44 20 33 12 32',
				'getonemore@mail.com',
			],
		},
	];
	return (
		<div className='footer_conteiner'>
			<div className='footer_top'>
				{footerData.map((item, idx) => {
					return (
						<div key={idx} className='footer_item'>
							<span className='footer_item_title' key={idx}>
								{item.title}
							</span>
							<ul>
								{item.data.map((el, idx) => {
									return <li key={idx}>{el}</li>;
								})}
							</ul>
						</div>
					);
				})}
			</div>
			<div className='footer_bottom'>2023 GETONEMORE</div>
		</div>
	);
};

export default Footer;
