import { NavLink } from "react-router-dom";
import Routing from "../Routing/Routing";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<h1>MEETINGS MANAGER </h1>
            <NavLink to="/meetings-per-team" exact> meetings by Team </NavLink>
            <span> | </span>
            <NavLink to="/add-meeting" exact>Add a new meeting</NavLink>
            <hr />
            <Routing />
        </div>
    );
}

export default Layout;
