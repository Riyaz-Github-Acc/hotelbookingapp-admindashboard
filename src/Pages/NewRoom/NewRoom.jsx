import axios from "axios";
import { useState } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import useFetch from "../../Hooks/useFetch";

import styles from "./NewRoom.module.scss";
import { useNavigate } from "react-router-dom";

const NewRoom = ({ inputs, title }) => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  const navigate = useNavigate();

  const { data, loading, error } = useFetch(
    "https://hotel-booking-app-api.onrender.com/api/hotels"
  );

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    try {
      await axios.post(
        `https://hotel-booking-app-api.onrender.com/api/rooms/${hotelId}`,
        { ...info, roomNumbers }
      );
      navigate("/rooms");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(hotelId);

  return (
    <div className={styles.new}>
      <Sidebar />
      <div className={styles.newContainer}>
        <Navbar />

        <div className={styles.top}>
          <h2>{title}</h2>
        </div>

        <div className={styles.bottom}>
          <div className={styles.right}>
            <form>
              <div className={styles.wrapper}>
                {inputs.map((input) => (
                  <div className={styles.formInput} key={input.id}>
                    <label htmlFor={input.id}>{input.label}</label>
                    <input
                      onChange={handleChange}
                      type={input.type}
                      id={input.id}
                      placeholder={input.placeholder}
                    />
                  </div>
                ))}

                <div className="formInput">
                  <label>Rooms</label>
                  <br />
                  <textarea
                    onChange={(e) => setRooms(e.target.value)}
                    placeholder="give comma between room numbers."
                  />
                </div>
                <div className="formInput">
                  <label>Choose a hotel</label>
                  <br />
                  <select
                    id="hotelId"
                    onChange={(e) => setHotelId(e.target.value)}
                  >
                    {loading
                      ? "loading"
                      : data &&
                        data.map((hotel) => (
                          <option key={hotel._id} value={hotel._id}>
                            {hotel.name}
                          </option>
                        ))}
                  </select>
                </div>
              </div>

              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
