import { useNavigate } from "react-router-dom";
import { useUserActivity } from "../Hooks/useUserActivity";

/**
 * @helper @Component
 * `TrackURLForNonLoggedInUser` component checks whether the user is accessing the secure URL's or not.
 * And will perform the actions accordingly.
 */
const TrackURLForNonLoggedInUser = () => {
    const navigate = useNavigate();
    useUserActivity(navigate);
}

export default TrackURLForNonLoggedInUser;
