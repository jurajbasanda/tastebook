import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//Style
import '../style/nav.scss'
//images
import coriander from '../images/Coriander-PNG.png'
const Nav = () => {
	//States
	const [Menu, setMenu] = useState('')
	//Open Mobile Menu
	const mobilMenu = () => {
		Menu === '' ? setMenu(' open') : setMenu('')
	}
	//Close Mobile Menu
	const closeMobilMenu = () => {
		setMenu('')
	}
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
					<Link to='/'>
						<i className='fas fa-user'></i> Sign In
					</Link>
				</div>
			</section>
			<nav>
				<div className='middlebar'>
					<div
						className='logo'
						onClick={closeMobilMenu}
						onKeyDown={closeMobilMenu}
					>
						<Link to='/'>
							<img src={coriander} alt='coriander' srcSet='' />
							<span>Tastebook</span>
						</Link>
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
					<div
						role='button'
						tabIndex='0'
						aria-pressed='false'
						aria-label='Menu'
						onClick={mobilMenu}
						onKeyDown={mobilMenu}
						className='burger'
					>
						<i className='fas fa-bars' />
					</div>
					<ul className='menu'>
						<li>
							<Link to='/' rel='category' aria-label='category'>
								category
							</Link>
						</li>
						<li>
							<Link to='/'  rel='about' aria-label='about'>
								about
							</Link>
						</li>
						<li>
							<Link to='/' rel='contact' aria-label='contact'>
								contact
							</Link>
						</li>
					</ul>
					<ul className={`mobil ${Menu}`}>
						<li>
							<Link
								to='/'
								rel='next'
								aria-label='category'
								onClick={mobilMenu}
								onKeyDown={mobilMenu}
							>
								category
							</Link>
						</li>
						<li>
							<Link
								to='/'
								rel='next'
								aria-label='about'
								onClick={mobilMenu}
								onKeyDown={mobilMenu}
							>
								about
							</Link>
						</li>
						<li>
							<Link
								to='/'
								href='#story'
								rel='next'
								aria-label='contact'
								onClick={mobilMenu}
								onKeyDown={mobilMenu}
							>
								contact
							</Link>
						</li>
					</ul>
				</div>
				<div></div>
			</nav>
		</header>
	)
}
export default Nav
