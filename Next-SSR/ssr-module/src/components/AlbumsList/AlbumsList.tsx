import { Flex } from "antd";
import Api from "../../api/api";
import { Albums } from "../../models";
import Album from "../Album/Album";
import { v4 as uuidv4 } from "uuid";

const getData = async (): Promise<Albums> => {
	return await Api.getAlbums();
};

const AlbumsList = async () => {
	const data = await getData();

	return (
		<Flex wrap="wrap" gap="middle" justify="center">
			{ Array.isArray(data) ? data.map((album) => (
				<Album key={uuidv4()} albumId={album.id} />
			)) : <div>Ошибка</div>
			}
		</Flex>
	);
};

export default AlbumsList;
