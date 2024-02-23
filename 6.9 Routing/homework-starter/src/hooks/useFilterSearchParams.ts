import {useSearchParams} from "react-router-dom";
import {ChangeEvent} from "react";
type TFilter = {
	genre?;
	name?;
	username?;
};
type TKeyParam = 'genre' | 'name' | 'username'

export const useFilterSearchParams = (keySearchParams:TFilter) => {
	if (Object.keys(keySearchParams).length === 0) throw new Error('searchKeyParam undefined');
	const [searchParams, setSearchParam] = useSearchParams();

	const handleSearch = (event: ChangeEvent<HTMLInputElement>, keyParam:TKeyParam): void => {
		const { value } = event.target;
		if (keyParam === 'genre') setSearchParam({[keyParam]: value.toLowerCase(), name: searchDataName});
		if (keyParam === 'name') setSearchParam({[keyParam]: value.toLowerCase(), genre: searchDataGenre});
		if (keyParam === 'username') setSearchParam({[keyParam]: value.toLowerCase()});
	};

	let searchDataUserName: string;
	let searchDataName: string;
	let searchDataGenre: string;
	if (Object.keys(keySearchParams).length === 1 && 'username' in keySearchParams) {
		searchDataUserName = searchParams.get(keySearchParams.username) || "";
	} else {
		searchDataName = searchParams.get(keySearchParams.name) || "";
		searchDataGenre = searchParams.get(keySearchParams.genre) || "";

	}
	return {
		searchDataUserName,
		searchDataName,
		searchDataGenre,
		handleSearch,
	}
}