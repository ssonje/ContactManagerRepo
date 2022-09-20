/**
 * @helper @Component
 * `NavbarActiveStateHelper` component provides the current active page from the Contact Management Application.
 */
const NavbarActiveStateHelper = (currentLocation) => {

    const activeStates = {};

    activeStates.homeClass = "nav-link" + (currentLocation === "/home" ? " active" : "");
    activeStates.aboutClass = "nav-link" + (currentLocation === "/about" ? " active" : "");
    activeStates.loginClass = "nav-link" + (currentLocation === "/login" ? " active" : "");
    activeStates.signupClass = "nav-link" + (currentLocation === "/signup" ? " active" : "");
    activeStates.userProfileClass = "nav-link" + (currentLocation === "/user/profile" ? " active" : "");
    activeStates.logoutClass = "nav-link" + (currentLocation === "/logout" ? " active" : "");

    return activeStates;

}

export default NavbarActiveStateHelper;
