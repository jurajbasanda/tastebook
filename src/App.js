import React from 'react'
import { BrowserRouter as BRouter, Route, Switch } from 'react-router-dom'
//Screens
import HomeScreen from './screens/HomeScreen'
import RecipeScreen from './screens/RecipeScreen'
import LoginScreen from './screens/LoginScreen'
import NoMatch from './screens/NoMatch'
//Components
import Nav from './components/Nav'
import Footer from './components/Footer'
//Style
import './style/App.scss'

function App() {
	return (
		<>
			<BRouter>
				<Nav />
				<Switch>
					<Route path='/' exact>
						<HomeScreen />
					</Route>
					<Route path='/recipe/:id'>
						<RecipeScreen />
					</Route>
					<Route path='/login'>
						<LoginScreen />
					</Route>
					<Route path='*'>
						<NoMatch />
					</Route>
				</Switch>
				<Footer />
			</BRouter>
		</>
	)
}

export default App
