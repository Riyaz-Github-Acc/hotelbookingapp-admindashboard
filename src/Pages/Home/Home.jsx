import useFetch from "../../Hooks/useFetch";

import Widget from "../../Components/Widget/Widget";
import Sidebar from "../../Components/Sidebar/Sidebar";

import styles from "./Home.module.scss";

const Home = () => {
  const { data, loading } = useFetch(
    "https://hotel-booking-app-api.onrender.com/api/hotels"
  );

  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.homeContainer}>
        <div className={styles.widgets}>
          <Widget type="users" />
          <Widget type="hotels" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>

        <h1>Hotels List</h1>
        <div className={styles.recentHotels}>
          {loading ? (
            "Loading"
          ) : (
            <>
              {data.map((item) => (
                <div className={styles.rhItem} key={item._id}>
                  <div className={styles.hotelDetails}>
                    <div className={styles.rhName}>{item.name}</div>
                    <div className={styles.rhDesc}>{item.desc}</div>

                    <div className={styles.rhCity}>{item.city}</div>

                    <div className={styles.rhPrice}>
                      Starting from <b>${item.lowestPrice}</b>
                    </div>

                    <div className={styles.rhAddress}>{item.address}</div>
                  </div>

                  <div className="hotelImg">
                    <img src={item.photos[0]} alt="" className={styles.rhImg} />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
