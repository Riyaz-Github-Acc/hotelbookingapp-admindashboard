import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Widget from "../../Components/Widget/Widget";
import Chart from "../../Components/Chart/Chart";
import Featured from "../../Components/Featured/Featured";
import Details from "../../Components/Table/Table";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.home}>
            <Sidebar />
            <div className={styles.homeContainer}>
                <Navbar />

                <div className={styles.widgets}>
                    <Widget type="users" />
                    <Widget type="orders" />
                    <Widget type="earnings" />
                    <Widget type="balance" />
                </div>

                <div className={styles.charts}>
                    <Featured />
                    <Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
                </div>

                <div className={styles.listContainer}>
                    <div className={styles.listTitle}>
                        <h3>Latest Transactions</h3>
                        <Details />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
