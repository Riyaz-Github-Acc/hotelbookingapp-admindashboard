// MUI Icons
import {
    KeyboardArrowUp,
    Person2,
    ShoppingCartOutlined,
    MonetizationOnOutlined,
    AccountBalanceWalletOutlined,
} from "@mui/icons-material";

import styles from "./Widget.module.scss";

const Widget = ({ type }) => {
    let data;

    // Temporary
    const amount = 100;
    const diff = 20;

    if (type === "users") {
        data = {
            title: "USERS",
            isMoney: false,
            link: "See All Users",
            icon: (
                <Person2
                    className={styles.icon}
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}
                />
            ),
        };
    } else if (type === "orders") {
        data = {
            title: "ORDERS",
            isMoney: false,
            link: "View All Orders",
            icon: (
                <ShoppingCartOutlined
                    className={styles.icon}
                    style={{
                        backgroundColor: "rgba(218, 165, 32, 0.2)",
                        color: "goldenrod",
                    }}
                />
            ),
        };
    } else if (type === "earnings") {
        data = {
            title: "EARNINGS",
            isMoney: true,
            link: "View Net Earnings",
            icon: (
                <MonetizationOnOutlined
                    className={styles.icon}
                    style={{
                        backgroundColor: "rgba(0, 128, 0, 0.2)",
                        color: "green",
                    }}
                />
            ),
        };
    } else if (type === "balance") {
        data = {
            title: "BALANCE",
            isMoney: true,
            link: "See Details",
            icon: (
                <AccountBalanceWalletOutlined
                    className={styles.icon}
                    style={{
                        backgroundColor: "rgba(128, 0, 128, 0.2)",
                        color: "purple",
                    }}
                />
            ),
        };
    } else {
        return;
    }

    return (
        <div className={styles.widget}>
            <div className={styles.left}>
                <div className={styles.title}>{data.title}</div>
                <div className={styles.counter}>
                    {data.isMoney && "₹"} {amount}
                </div>
                <div className={styles.link}>{data.link}</div>
            </div>

            <div className={styles.right}>
                <div className={`${styles.percentage} ${styles.positive}`}>
                    <KeyboardArrowUp />
                    {diff}%
                </div>

                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
