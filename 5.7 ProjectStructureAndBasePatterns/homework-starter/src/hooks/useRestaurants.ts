import { useEffect, useState } from "react";
import {getRestaurants, Restaurant, updateRestaurantRating} from "../api/restaurants";
import type {TClickHandleStar} from "../pages/RestaurantsView";

export const useRestaurants = () => {
	const [restaurantsData, setRestaurantData] = useState<Array<Restaurant>>()
	const [filteredRestaurantsData, setFilteredRestaurantsData] = useState<Array<Restaurant>>()
	useEffect(() => {
		(async () => {
			const data = await getRestaurants();
			setRestaurantData(data);
			setFilteredRestaurantsData(data);
		})()
	},[])
	const updateRestaurantData: TClickHandleStar = async ({ idCard, rating }) => {
		const responseData = await updateRestaurantRating({ id: idCard, rating });
		setFilteredRestaurantsData(prevData => {
			return prevData?.map(restaurant => {
				if (restaurant.id === responseData.id) {
					return { ...restaurant, rating: responseData.rating };
				}
				return restaurant;
			});
		});
	};
	const filterRestaurantData = (restaurantName: string): void => {
		console.log(restaurantName)
		if (restaurantName && filteredRestaurantsData?.length > 0) {
			const prepareName = restaurantName.trim().toLowerCase();
			setFilteredRestaurantsData(prevState => {
				const filterResultAll = restaurantsData?.filter(restaurant => restaurant.name.replaceAll(' ', '').toLowerCase().includes(prepareName))
				if (filterResultAll.length === 0) {
					return restaurantsData?.filter(restaurant => restaurant.name.toLowerCase().includes(prepareName))
				} else {
					return filterResultAll;
				}
			})
		} else {
			setFilteredRestaurantsData(prevState => [...restaurantsData])
		}
	}
	return {
		restaurantsData,
		filteredRestaurantsData,
		updateRestaurantData,
		filterRestaurantData
	}
}