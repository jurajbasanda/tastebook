import React from 'react'
import { Link } from 'react-router-dom'
//Style
import '../style/nav.scss'
//images
import coriander from '../images/Coriander-PNG.png'
const Nav = () => {
	return (
		<header>
			<section className='topbar'>
				<div className='soc-net'>
                <span>Fallow Us </span>
                    <ul>
						<li>
							<a href='/'>
								<i className='fab fa-facebook-f'></i>
							</a>
						</li>
						<li>
							<a href='/'>
								<i className='fab fa-instagram'></i>
							</a>
						</li>
						<li>
							<a href='/'>
								<i className='fab fa-twitter'></i>
							</a>
						</li>
					</ul>
				</div>
				<div className='user-menu-group'>
					<Link>
						<i className='fas fa-user'></i> Sign In
					</Link>
				</div>
			</section>
			<nav>
				<div className='middlebar'>
					<div className='logo'>
						<img src={coriander} alt='coriander' srcSet='' />
						Tastebook
					</div>
					<div className='searchbox'>
						<form>
							<label htmlFor='Search'></label>
							<input
								type='text'
								id='Search'
								placeholder='Search for recipe...'
							/>
							<button>
								<i className='fas fa-search'></i>
							</button>
						</form>
					</div>
					<ul className='menu'>
						<li>
							<Link to='/'>category</Link>
						</li>
						<li>
							<Link to='/'>about</Link>
						</li>
						<li>
							<Link to='/'>contact</Link>
						</li>
					</ul>
				</div>
				<div></div>
			</nav>
		</header>
	)
}
export default Nav
