/**
 * @helper @Component
 * `NavbarActiveStateHelper` component provides the current active page from the Contact Management Application.
 */
const NavbarActiveStateHelper = (currentLocation) => {

    const activeStates = {};

    // Active states helpers for user
    activeStates.homeClass = "nav-link" + (currentLocation === "/home" ? " active" : "");
    activeStates.aboutClass = "nav-link" + (currentLocation === "/about" ? " active" : "");
    activeStates.loginClass = "nav-link" + (currentLocation === "/login" ? " active" : "");
    activeStates.signupClass = "nav-link" + (currentLocation === "/signup" ? " active" : "");

    // Active states helpers for logged in user
    activeStates.logoutClass = "nav-link" + (currentLocation === "/logout" ? " active" : "");

    // Active states helpers for ROLE = USER
    activeStates.userProfileClass = "nav-link" + (currentLocation === "/user/profile" ? " active" : "");
    activeStates.userSettingsClass = "nav-link" + (currentLocation === "/user/settings" ? " active" : "");
    activeStates.userAddContactClass = "nav-link" + (currentLocation === "/user/add/contact" ? " active" : "");
    activeStates.userViewContactsClass = "nav-link" + (currentLocation === "/user/view/contacts" ? " active" : "");

    return activeStates;
}

export default NavbarActiveStateHelper;
