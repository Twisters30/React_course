import { ITeam } from "../../api.ts";
import "./styles.css";
import {memo} from "react";

interface ITeamData {
  team: ITeam[];
}
export const Team = memo(({ team }: ITeamData) => {
  return (
    <>
      <h2>Our Team</h2>
	    <h3>{'performance: ' +  Math.ceil(performance.now()) + 'ms'} </h3>
      <div className="component">
        {team.map(({ name, position, image }) => (
          <div key={name}>
            <img src={image} width={300} height={300} alt="" />
            <p>
              {name}: {position}
            </p>
          </div>
        ))}
      </div>
    </>
  );
});
