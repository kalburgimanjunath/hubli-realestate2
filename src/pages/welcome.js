import { Link } from "react-router-dom";
export default function Welcome() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 300, backgroundColor: "#d0d0d0", height: "100%" }}>
        Welcome
      </div>
      <div>
        <Link to="/login" className="button button-primary">
          Login
        </Link>
        <Link to="/register" className="button button-primary">
          Register
        </Link>
        <Link to="/home" className="button button-primary">
          Dashboard
        </Link>
      </div>
    </div>
  );
}
