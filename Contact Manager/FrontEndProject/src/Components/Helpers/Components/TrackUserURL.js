import { useNavigate } from "react-router-dom";
import { useUserActivity } from "../Hooks/useUserActivity";

/**
 * @helper @Component
 * `TrackUserURL` component checks whether the user is accessing the secure URL's or not.
 * And will perform the actions accordingly.
 */
const TrackUserURL = () => {
    const navigate = useNavigate();
    useUserActivity(navigate);
}

export default TrackUserURL;
