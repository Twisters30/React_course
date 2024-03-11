import { FC } from "react";
import Api from "../../api/api";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

type Props = {
	albumId: number;
};

const Album: FC<Props> = async ({ albumId }: Props) => {
	const data = await Api.getPhotos(albumId);

	return (
		<div className="album-container">
			{ Array.isArray(data) ? data.map((photo) => (
				<div className="photo-container" key={uuidv4()}>
					<img src={photo.url} className="photo-img" />
				</div>
			)) : <div>Ошибка</div>
			}
		</div>
	);
};

export default Album;
