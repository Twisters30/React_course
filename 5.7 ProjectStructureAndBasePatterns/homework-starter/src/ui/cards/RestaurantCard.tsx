import {FC} from "react";
import {Restaurant} from "../../api/restaurants";
import {StarsRating} from "../StarsRating";
import type { TClickHandleStar } from "../../pages/RestaurantsView";

type TProps = Restaurant & {
	clickHandleStar: TClickHandleStar
}

export const RestaurantCard: FC<TProps> = (
	{
		url,
		name,
		description,
		rating,
		clickHandleStar,
		id
	}) => {

	return (
		<li className={'card-list__item'}>
			<img className={'card-list__image'} src={url} />
			<h2 className={'card-list__title'}>{name}</h2>
			<p className={'card-list__description'}>{description}</p>
			<StarsRating clickHandleStar={clickHandleStar} idCard={id} rating={rating} />
		</li>
	)
}