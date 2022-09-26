import SideBarUIForLoggedInUser from "./UI/SideBarUIForLoggedInUser";
import SideBarUIForNonLoggedInUser from "./UI/SideBarUIForNonLoggedInUser";

/**
 * @Component
 * `SideBar` component provides the UI and functionality for Side in the User Profile Section in Contact Manager Appication.
 */
const SideBar = (props) => {
    return (
        localStorage.length === 1
            ? <SideBarUIForLoggedInUser setSideBarForProfileUI={props.setSideBarForProfileUI} />
            : <SideBarUIForNonLoggedInUser setSideBarForProfileUI={props.setSideBarForProfileUI} />
    );
}

export default SideBar;
