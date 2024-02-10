import "./UserView.css";
import {FC} from "react";
import type { TypeFetchMeResponse as TypeUserViewProps } from '../../api/User'


export const UserView: FC<TypeUserViewProps> = ({username}) => {

  return (
    <div className="user-view">
      <div className="user-view__logo">
        {username && username.slice(0, 1).toUpperCase()}
      </div>
      <span className="user-view__name">{username && username}</span>
    </div>
  );
};
