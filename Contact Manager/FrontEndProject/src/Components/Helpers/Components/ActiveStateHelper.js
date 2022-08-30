/**
 * @Component
 * `ActiveStateHelper` component provides the current active page from the Contact Management Application.
 */
const ActiveStateHelper = (currentLocation) => {

    const activeStates = {};

    activeStates.homeClass = "nav-link" + (currentLocation === "/home" ? " active" : "");
    activeStates.aboutClass = "nav-link" + (currentLocation === "/about" ? " active" : "");
    activeStates.loginClass = "nav-link" + (currentLocation === "/login" ? " active" : "");
    activeStates.signupClass = "nav-link" + (currentLocation === "/signup" ? " active" : "");

    return activeStates;

}

export default ActiveStateHelper;
