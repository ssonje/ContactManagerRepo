import { useNavigate } from "react-router-dom";
import { useUserActivityForNonLoggedInUser } from "../Hooks/useUserActivityForNonLoggedInUser";

/**
 * @helper @Component
 * `TrackURLForNonLoggedInUser` component checks whether the user is accessing the secure URL's or not.
 * And will perform the actions accordingly.
 */
const TrackURLForNonLoggedInUser = () => {
    const navigate = useNavigate();
    useUserActivityForNonLoggedInUser(navigate);
}

export default TrackURLForNonLoggedInUser;
