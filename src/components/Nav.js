import React from 'react'
import {Link }from 'react-router-dom'
//Style
import '../style/nav.scss'
//images
import coriander from '../images/Coriander-PNG.png'
const Nav = () => {
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
            </section>
            <nav>
            <div className='middlebar'>
            <div className='logo'><img src={coriander} alt="coriander" srcSet=""/>Tastebook</div>
            <div className='searchbox'><form><input type="text" placeholder='Search for recipe...'/><button><i className="fas fa-search"></i></button></form></div>
            <ul className='menu'>
            <li><Link>category</Link></li>
            <li>about</li>
            <li>contact</li>
            </ul>
            </div>
            
            </nav>
		</header>
	)
}
export default Nav
