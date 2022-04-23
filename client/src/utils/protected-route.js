import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isLoggined } = useSelector((state) => state.user);

  return isLoggined ? children : <Navigate to="/login" />;
}
