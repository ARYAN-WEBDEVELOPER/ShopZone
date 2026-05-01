import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    login();
    navigate(from);
  };

  return (
    <div className="login-container">
  <h2>Sign In</h2>

  <button onClick={handleLogin} className="login-btn">
    Continue as Guest
  </button>
</div>
  );
}