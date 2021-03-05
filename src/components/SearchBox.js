import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchBox = () => {
	//Router hooks
	const { push } = useHistory()

	const [keyword, setKeyword] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()
		if (keyword.trim()) {
			push(`/search/${keyword}`)
		} else {
			push(`/`)
		}
	}
	return (
		<form onSubmit={submitHandler}>
			<label htmlFor='Search'></label>
			<input
				type='text'
				id='Search'
				onChange={(e) => setKeyword(e.target.value)}
				placeholder='Search for recipe...'
			/>
			<button>
				<i className='fas fa-search'></i>
			</button>
		</form>
	)
}

export default SearchBox
