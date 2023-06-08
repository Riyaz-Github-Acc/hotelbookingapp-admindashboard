import { Link, useNavigate } from "react-router-dom";

// MUI Icons
import {
  Dashboard,
  PeopleAlt,
  Apartment,
  KingBed,
  ExitToApp,
} from "@mui/icons-material";

// CSS
import styles from "./Sidebar.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <Link to="/">
          <div className={styles.logo}>MBA Admin</div>
        </Link>
      </div>
      <hr />

      <div className={styles.middle}>
        <ul>
          <p className={styles.title}>MAIN</p>

          <Link to="/">
            <li>
              <Dashboard className={styles.icon} />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className={styles.title}>LISTS</p>

          <Link to="/users">
            <li>
              <PeopleAlt className={styles.icon} />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/hotels">
            <li>
              <Apartment className={styles.icon} />
              <span>Hotels</span>
            </li>
          </Link>

          <Link to="/rooms">
            <li>
              <KingBed className={styles.icon} />
              <span>Rooms</span>
            </li>
          </Link>

          <p className={styles.title}>USER</p>
          <li>
            <ExitToApp className={styles.icon} />
            <span onClick={handleLogout}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
