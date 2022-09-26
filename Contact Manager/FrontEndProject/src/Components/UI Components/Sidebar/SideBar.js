import SideBarUI from "./UI/SideBarUI";

/**
 * @Component
 * `SideBar` component provides the UI and functionality for Side in the User Profile Section in Contact Manager Appication.
 */
const SideBar = (props) => {
    return (
        <SideBarUI setSideBarForProfileUI={props.setSideBarForProfileUI}/>
    );
}

export default SideBar;
