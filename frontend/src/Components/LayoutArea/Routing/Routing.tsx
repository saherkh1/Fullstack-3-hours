import { Redirect, Route, Switch } from "react-router-dom";
import AddMeeting from "../../MeetingsArea/AddMeeting/AddMeeting";
import MeetingsPerTeam from "../../MeetingsArea/MeetingsPerTeam/MeetingsPerTeam";

function Routing(): JSX.Element {
    return (
        <>
			<Switch>
                <Route path="/meetings-per-team" component={MeetingsPerTeam} />
                <Route path="/add-meeting" component={AddMeeting} />
                <Redirect from="/" to="/meetings-per-team" exact />
            </Switch>
        </>
    );
}

export default Routing;
