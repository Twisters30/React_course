import {FC, useContext} from "react";
import {StarIcon} from "./icons/StarIcon";
import type {TClickHandleStar} from "../pages/RestaurantsView";

type TProps = {
	idCard: string;
	rating: number;
	clickHandleStar: TClickHandleStar;
}

export const StarsRating: FC<TProps> = ({rating , idCard, clickHandleStar} ) => {
	let index = 1;
	const ratingList = Array.from({length: 5}, () => ({rating: index++ , idCard}));
	return (
		<ul className={'list-stars'}>
			{
				ratingList.map((star, index) => (
					<li
						onClick={() => clickHandleStar({idCard: star.idCard, rating: star.rating})}
						key={Date.now() + Math.random()}>
						{
							index < rating ? <StarIcon fill={'orange'} className={'fill'}/> : <StarIcon />
						}
				</li>)
				)
			}
		</ul>
	)
}