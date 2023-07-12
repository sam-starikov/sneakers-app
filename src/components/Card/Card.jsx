import './card.css'

import { useState } from 'react'

const Card = ({ image, title, price }) => {
	const [isFavorite, setIsFavorite] = useState(false)
	const [isAdded, setIsAdded] = useState(false)

	const onFavorite = () => {
		setIsFavorite(!isFavorite)
	}

	const addToCart = () => {
		setIsAdded(!isAdded)
	}

	return (
		<div className='card'>
			<div className='card__container'>
				<img
					onClick={onFavorite}
					className='card__like'
					height={40}
					src={isFavorite ? './img/liked.svg' : './img/unliked.svg'}
					alt='like'
				/>
				<img className='card__img' height={112} src={image} alt='sneakers' />
				<h3 className='card__title'>{title}</h3>
				<div className='card__bottom'>
					<div className='card__price'>
						<p>Цена:</p>
						<b>{price}p.</b>
					</div>
					<button className='card__btn'>
						<img
							onClick={addToCart}
							src={isAdded ? './img/btn-added.svg' : './img/btn-plus.svg'}
							alt='add button'
						/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card
