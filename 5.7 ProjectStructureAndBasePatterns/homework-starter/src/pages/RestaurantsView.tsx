import { useRestaurants } from "../hooks/useRestaurants";
import { RestaurantList } from "../ui/lists/RestaurantList";

export type TClickHandleStar = ({ idCard, rating }: { idCard:string, rating: number }) => void

export const RestaurantsView = () => {
	const {updateRestaurantData, filterRestaurantData, filteredRestaurantsData} = useRestaurants();
	return (
		<>
			<input
				onChange={(event) => filterRestaurantData(event.target.value)}
				placeholder="Search for restaurants"
			/>
			<h1>Restaurants</h1>
			{ filteredRestaurantsData?.length ?
				<RestaurantList
					list={filteredRestaurantsData}
					clickHandleStar={updateRestaurantData}
				/> : 'Ничего не найденно'
			}
		</>
	)
}