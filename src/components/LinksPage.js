import React from 'react';
import Main from './Main';
import '../styles/Main.css';
import '../styles/LinksPage.css';

export default function LinksPage() {
	return (
		<>
			<Main></Main>
			<div className='container'>
				<div className='phone_pic_container'>
					<div className='white_background'></div>
					<div className='phone_pic'>
						<div className='phone_cut_edge'></div>

						<div className='circle'></div>
						<div className='small_rectangle'></div>
						<div className='smaller_rectangle'></div>
						<div className='child_container'>
							<div className='black_rectangle'>
								{' '}
								<i class='fa-brands fa-github'></i>GitHub{' '}
								<i class='fa-solid fa-arrow-right'></i>
							</div>
							<div className='red_rectangle'>
								{' '}
								<i class='fa-brands fa-youtube'></i> YouTube{' '}
								<i class='fa-solid fa-arrow-right'></i>
							</div>
							<div className='blue_rectangle'>
								<i class='fa-brands fa-linkedin'></i> Linkdin{' '}
								<i class='fa-solid fa-arrow-right'></i>
							</div>
							<div className='arch_rectangle'></div>
							<div className='arch_rectangle'></div>
						</div>
					</div>
				</div>
				<div className='login_info_container'>
					<h1>Customie your links</h1>
					<p className='one'>
						Add/Edit/Remove Link below and then share all your profile with the
						world
					</p>
					<p className='two'> + Add new link</p>
					<div className='Login_container'>
						<div className='first_login_container'>
							<p>link #1</p>
							<p className='remove'>Remove</p>
							<p>platform</p>
							<select>
								<option value='GitHub'>GitHub</option>
								<option value='YouTube'>YouTube</option>
								<option value='Linkdin'>Linkdin</option>
							</select>
							<input type='text'></input>
						</div>
						<div className='second_login_container'>
							<p>link #2</p>
							<p className='remove'>Remove</p>
							<p>platform</p>
							<select>
								<option value='GitHub'>GitHub</option>
								<option value='YouTube'>YouTube</option>
								<option value='Linkdin'>Linkdin</option>
							</select>
							<input type='text'></input>
						</div>
					</div>
					<div className='horiontal_line'></div>
					<div className='btn'>Save</div>
				</div>
			</div>
		</>
	);
}
