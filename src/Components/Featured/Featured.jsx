// MUI Icons
import {
    MoreVert,
    KeyboardArrowDown,
    KeyboardArrowUpOutlined,
} from "@mui/icons-material";

// Progress Bar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// CSS
import styles from "./Featured.module.scss";

const Featured = () => {
    return (
        <div className={styles.featured}>
            <div className={styles.top}>
                <h3>Total Revenue</h3>
                <MoreVert fontSize="small" />
            </div>

            <div className={styles.bottom}>
                <div className={styles.featuredChart}>
                    <CircularProgressbar
                        value={70}
                        text={"70%"}
                        strokeWidth={5}
                    />
                </div>

                <p className={styles.title}>Total Sales Made Today</p>
                <p className={styles.amount}>&#8377; 50,000</p>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis totam eveniet eius?
                </p>

                <div className={styles.summary}>
                    <div className={styles.item}>
                        <div className={styles.title}>Target</div>
                        <div
                            className={`${styles.itemResult} ${styles.negative}`}>
                            <KeyboardArrowDown />
                            <div className={styles.resultAmount}>
                                &#8377; 120k
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.title}>Last Week</div>
                        <div
                            className={`${styles.itemResult} ${styles.positive}`}>
                            <KeyboardArrowUpOutlined />
                            <div className={styles.resultAmount}>
                                &#8377; 120k
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.title}>Last Month</div>
                        <div
                            className={`${styles.itemResult} ${styles.positive}`}>
                            <KeyboardArrowUpOutlined />
                            <div className={styles.resultAmount}>
                                &#8377; 120k
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
