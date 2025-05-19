import { useAuthContext } from "../contexts";
import { Navigate } from "react-router-dom";

const AlreadyLoggedInRedirect = ({ children }) => {
  const { token } = useAuthContext();
  if (token) return <Navigate to="/" replace={false} />;
  return children;
};

export default AlreadyLoggedInRedirect;
