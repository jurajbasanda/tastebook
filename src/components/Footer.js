import React from 'react'
//Style
import '../style/footer.scss'

const Footer = () => {
    return <footer>
    <section className='social-footer'>
    {// <h4>Fallow Us</h4>
    // <ul>
	// 					<li>
	// 						<a href='/'>
	// 							<i className='fab fa-facebook-f'></i>
	// 						</a>
	// 					</li>
	// 					<li>
	// 						<a href='/'>
	// 							<i className='fab fa-instagram'></i>
	// 						</a>
	// 					</li>
	// 					<li>
	// 						<a href='/'>
	// 							<i className='fab fa-twitter'></i>
	// 						</a>
	// 					</li>
	// 				</ul>
}
    </section>
    <section className='newsletter-footer'>
    <form>
    <h3>Newsletter</h3>
    <label htmlFor="email">subscribe for more fresh recipes</label>
    <div>
    <input id='email' name='email' type="text" placeholder='Your email...'/>
    <button>Sign Up</button>
    </div>
    </form>
    </section>
    </footer>
}
export default Footer
