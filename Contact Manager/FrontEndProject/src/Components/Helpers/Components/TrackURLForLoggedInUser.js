import { useNavigate } from "react-router-dom";
import { useUserActivityForLoggedInUser } from "../Hooks/useUserActivityForLoggedInUser";

/**
 * @helper @Component
 * `TrackURLForLoggedInUser` component checks whether the user is accessing the secure URL's or not.
 * And will perform the actions accordingly.
 */
const TrackURLForLoggedInUser = () => {
    const navigate = useNavigate();
    useUserActivityForLoggedInUser(navigate);
}

export default TrackURLForLoggedInUser;
