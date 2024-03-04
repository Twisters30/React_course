import {useSearchParams} from "react-router-dom";
import {ChangeEvent} from "react";
type TFilter = {
	genre?: string;
	name?: string;
	username?: string;
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

	let searchDataUserName = '';
	let searchDataName = '';
	let searchDataGenre = '';
	if (Object.keys(keySearchParams).length === 1 && 'username' in keySearchParams) {
		const tmpDataUserName: string | null = keySearchParams.username ? searchParams.get(keySearchParams.username) : "";
		searchDataUserName = tmpDataUserName === null ? '' : tmpDataUserName
	} else {
		const tmpDataName: string | null = keySearchParams.name ? searchParams.get(keySearchParams.name) : "";
		const tmpDataGenre: string | null = keySearchParams.genre ? searchParams.get(keySearchParams.genre) : "";
		searchDataName = tmpDataName === null ? '' : tmpDataName;
		searchDataGenre = tmpDataGenre === null ? '' : tmpDataGenre
	}
	return {
		searchDataUserName,
		searchDataName,
		searchDataGenre,
		handleSearch,
	}
}