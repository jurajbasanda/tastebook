import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//Style
import '../style/nav.scss'
//images
import logo from '../images/tastyLogo.png'
const Nav = () => {
	//States
	const [Menu, setMenu] = useState('')
	const [MenuCategory, setMenuCategory] = useState('')
	//Mobile Menu
	const mobilMenu = () => {
		Menu === '' ? setMenu(' open') : setMenu('')
	}
	//Close Mobile Menu
	const closeMenus = () => {
		setMenu('')
		setMenuCategory('')
	}
	//Mobile Category Menu
	const mobilMenuCategory = () => {
		MenuCategory === '' ? setMenuCategory(' open') : setMenuCategory('')
	}
	//Both
	const mobilMenus = () => {
		mobilMenu()
		mobilMenuCategory()
	}

	return (
		<header>
			<section className='topbar'>
				<div className='soc-net'>
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
						<i className='fas fa-user'></i> Log In
					</Link>
				</div>
			</section>
			<nav>
				<div className='middlebar'>
					<div className='logo' onClick={closeMenus} onKeyDown={closeMenus}>
						<Link to='/'>
							<img src={logo} alt='coriander' srcSet='' />
							<span>Tastebook</span>
						</Link>
					</div>
					<div className='searchbox none570'>
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
						className='burger '
					>
						<button>
							<i className='fas fa-bars' />
						</button>
					</div>
					<ul className='menu'>
						<li>
							<Link to='/' rel='category' aria-label='category'>
								category
							</Link>
						</li>
						<li>
							<Link to='/' rel='about' aria-label='about'>
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
								onClick={mobilMenuCategory}
								onKeyDown={mobilMenuCategory}
							>
								category
							</Link>
						</li>
						<li>
							<Link
								to='/about'
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
								to='/contact'
								rel='next'
								aria-label='contact'
								onClick={mobilMenu}
								onKeyDown={mobilMenu}
							>
								contact
							</Link>
						</li>
						<li>
							<button onClick={mobilMenu} onKeyDown={mobilMenu}>
								<i
									style={{ color: 'black', fontSize: '1.5rem' }}
									className='far fa-window-close'
								></i>
							</button>
						</li>
					</ul>
					<ul className={`mobil ${MenuCategory}`}>
						<li>
							<Link
								to='/'
								rel='next'
								aria-label='pork'
								onClick={mobilMenus}
								onKeyDown={mobilMenus}
							>
								pork
							</Link>
						</li>
						<li>
							<Link
								to='/beef'
								rel='next'
								aria-label='beef'
								onClick={mobilMenus}
								onKeyDown={mobilMenus}
							>
								beef
							</Link>
						</li>
						<li>
							<Link
								to='/chicken'
								rel='next'
								aria-label='chicken'
								onClick={mobilMenus}
								onKeyDown={mobilMenus}
							>
								chicken
							</Link>
						</li>
						<li>
							<button onClick={mobilMenus} onKeyDown={mobilMenu}>
								<i
									style={{ color: 'black', fontSize: '1.5rem' }}
									className='far fa-window-close'
								></i>
							</button>
						</li>
					</ul>
				</div>
				<div className='searchbox flex570'>
					<form>
						<label htmlFor='Search'></label>
						<input type='text' id='Search' placeholder='Search for recipe...' />
						<button>
							<i className='fas fa-search'></i>
						</button>
					</form>
				</div>
			</nav>
		</header>
	)
}
export default Nav
