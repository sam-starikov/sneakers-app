import './home.css'

import Slider from '../../components/Slider/Slider'
import Card from '../../components/Card/Card'

import { useState } from 'react'

const Home = ({ items, addToCart }) => {
	const [searchValue, setSearchValue] = useState('')

	const onChangeInput = event => {
		setSearchValue(event.target.value)
	}

	return (
		<div className='home container'>
			<Slider />
			<div className='home__top-section'>
				<h1 className='home__title'>
					{searchValue
						? `По запросу '${searchValue}' найденно ${items.length} шт.`
						: 'Все кроссовки'}
				</h1>
				<div className='home__search search'>
					<img
						className='search__search-image'
						src='./img/search.svg'
						alt='search'
					/>
					{searchValue && (
						<img
							className='search__remove-image'
							src='./img/btn-remove.svg'
							alt='remove'
							onClick={() => setSearchValue('')}
						/>
					)}
					<input
						className='search__input'
						onChange={onChangeInput}
						value={searchValue}
						type='text'
						placeholder='Поиск...'
					/>
				</div>
			</div>
			<div className='home__content'>
				{items
					.filter(obj =>
						obj.title.toLowerCase().includes(searchValue.toLowerCase())
					)
					.map((obj, inx) => (
						<Card key={inx} {...obj} onPlus={obj => addToCart(obj)} />
					))}
			</div>
		</div>
	)
}

export default Home
