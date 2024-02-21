import { RestaurantCard } from "../cards/RestaurantCard";
import {FC} from "react";
import {Restaurant} from "../../api/restaurants";
import type { TClickHandleStar } from "../../pages/RestaurantsView";

type TProps = {
	list:Restaurant[] | undefined;
	clickHandleStar : TClickHandleStar;
}

export const RestaurantList: FC<TProps> = ({list, clickHandleStar }) => {
	return (
		<ul className={'card-list'}>
			{ Array.isArray(list) ?
				list.map(item => (
					<RestaurantCard
						key={item.id}
						{...item}
						clickHandleStar={clickHandleStar}
					/>
				)) : <p>Загрузка</p>
			}
		</ul>
	)
}