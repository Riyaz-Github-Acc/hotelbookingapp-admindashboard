// MUI Icons
import {
  SearchOutlined,
  LanguageOutlined,
  FullscreenExitOutlined,
  NotificationsNoneOutlined,
  ChatBubbleOutlineOutlined,
  ListOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

// Images
import Avatar from "../../assets/images/general/avatar.jpeg";

// CSS
import styles from "./Navbar.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <LanguageOutlined className={styles.icon} />
            English
          </div>
          <div className={styles.item}>
            <FullscreenExitOutlined className={styles.icon} />
          </div>
          <div className={styles.item}>
            <NotificationsNoneOutlined className={styles.icon} />
            <div className={styles.counter}>1</div>
          </div>
          <div className={styles.item}>
            <ChatBubbleOutlineOutlined className={styles.icon} />
            <div className={styles.counter}>2</div>
          </div>
          <div className={styles.item}>
            <ListOutlined className={styles.icon} />
          </div>
          <div className={styles.item}>
            <SettingsOutlined className={styles.icon} />
          </div>
          <div className={styles.item}>
            <img src={user.img} alt="" className={styles.avatar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
