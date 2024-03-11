import { FC, useCallback, useEffect, useState } from "react";
import { Photos } from "../../models";
import Api from "../../api/api";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

type Props = {
	albumId: number;
};

const Album: FC<Props> = ({ albumId }: Props) => {
	const [data, setData] = useState<Photos>([]);

	const getData = useCallback(async (): Promise<void> => {
		const data = await Api.getPhotos(albumId);
		setData(data);
	}, [albumId]);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<div className="album-container">
			{data.map((photo) => (
				<div className="photo-container" key={uuidv4()}>
					<img src={photo.url} className="photo-img" />
				</div>
			))}
		</div>
	);
};

export default Album;
