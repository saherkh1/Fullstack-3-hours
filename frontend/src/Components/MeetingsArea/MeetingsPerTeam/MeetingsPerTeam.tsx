import axios from "axios";
import { useEffect, useState } from "react";
import MeetingModel from "../../../Models/MeetingModel";
import TeamModel from "../../../Models/TeamModel";
import MeetingCard from "../MeetingCard/MeetingCard";
import "./MeetingsPerTeam.css";

function MeetingsPerTeam(): JSX.Element {
    const [teams, setTeams] = useState<TeamModel[]>([]);
    const [meetings,setMeetings] = useState<MeetingModel[]>([]);

    useEffect(() => {
        axios.get<TeamModel[]>("http://localhost:3001/api/teams")
            .then(response => setTeams(response.data))
            .catch(err => alert(err.message));
    });

    const onSelectChange = async (event: any) =>  {  
        await axios.get<MeetingModel[]>(`http://localhost:3001/api/meetings-per-team/${event.target.value}`)
            .then(response => setMeetings(response.data))
            .catch(err => alert(err.message));
    };

    return (
        <div className="MeetingsPerTeam">
			<label>Team: </label>
                <select onChange={onSelectChange}>
                    <option disabled selected value="0">Select A Team </option>
                    {teams.map(t => <option key={t.teamId} value={t.teamId}>{t.name}</option>)}
                </select>
                <h2>meetings List</h2>
                {meetings.map(m => <MeetingCard key={m.meetingId} Meeting={m} />)}
        </div>
    );
}

export default MeetingsPerTeam;
