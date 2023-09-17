import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.css';

export default function Main() {
	return (
		<>
			<div className='container'>
				<nav>
					<ul>
						<div className='icon_container'>
							<div className='icon'>
								<i class='fa-solid fa-link'></i>{' '}
							</div>
							<li>devlinks</li>
						</div>

						<div className='combined_link'>
							<li>
								<Link className='Links' to={'LinkPage'}>
									<i class='fa-solid fa-link'></i>
									Links
								</Link>
							</li>
							<li>
								<i class='fa-solid fa-globe'></i>
								<Link to={'profile'}>Profile Details</Link>
							</li>
						</div>
						<li>
							<Link className='preview' to={'Preview'}>
								Preview
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
