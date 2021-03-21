import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userAction'
import { useHistory } from 'react-router-dom'
//Style
import '../style/nav.scss'
//images
import logo from '../images/tastyLogo.png'
import SearchBox from './SearchBox'
const Nav = () => {
	//Router Hooks
	const { push } = useHistory()
	//States
	const [Menu, setMenu] = useState('')
	const [MenuCategory, setMenuCategory] = useState('')
	//Redux State
	const dispatch = useDispatch()
	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin
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

	const logoutHnadler = () => {
		dispatch(logout())
		push('/login')
	}

	return (
		<header>
			<section className='topbar'>
				<div className='soc-net'>
					<ul>
						<li>
							<a href='/fb'>
								<i
									className='fab fa-facebook-f'
									role='button'
									title='facebook'
								></i>
							</a>
						</li>
						<li>
							<a href='/insta'>
								<i className='fab fa-instagram' title='instagram'></i>
							</a>
						</li>
						<li>
							<a href='/twitter'>
								<i className='fab fa-twitter' title='twitter'></i>
							</a>
						</li>
					</ul>
				</div>
				<div className='user-menu-group'>
					{userInfo ? (
						<div className='account-menu'>
							<Link to='/myaccount'>
								<i className='fas fa-user'></i>
								<span>My account</span>
							</Link>{' '}
							| <span onClick={logoutHnadler}>Log out</span>
						</div>
					) : (
						<div className='account-menu'>
							<Link to='/login'>
								<i className='fas fa-user' title='user'></i>
								<span>Log In</span>
							</Link>
						</div>
					)}
				</div>
			</section>
			<nav>
				<div className='middlebar'>
					<div className='logo' onClick={closeMenus} onKeyDown={closeMenus}>
						<Link to='/'>
							<img src={logo} alt='tastebook-logo' srcSet='' />
							<span>Tastebook</span>
						</Link>
					</div>
					<div className='searchbox none570'>
						<SearchBox />
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
							<i className='fas fa-bars' title='menu' />
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
							<button
								title='category'
								className='category-btn'
								rel='next'
								aria-label='category'
								onClick={mobilMenuCategory}
								onKeyDown={mobilMenuCategory}
							>
								category
							</button>
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
									title='close'
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
									title='close'
								></i>
							</button>
						</li>
					</ul>
				</div>
				<div className='searchbox flex570'>
					<SearchBox />
				</div>
			</nav>
		</header>
	)
}
export default Nav
