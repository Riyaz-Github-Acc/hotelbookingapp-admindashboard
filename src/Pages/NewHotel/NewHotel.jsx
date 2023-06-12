import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Image
import ImgPlaceholder from "../../assets/images/single/img-placeholder.png";

import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

import styles from "./NewHotel.module.scss";
import useFetch from "../../Hooks/useFetch";

const NewHotel = ({ inputs, title }) => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);

  const { data, loading } = useFetch(
    "https://hotel-booking-app-api.onrender.com/api/rooms"
  );

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "HotelBookingApp");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/ds60krqho/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newhotel = {
        ...info,
        rooms,
        photos: list,
      };
      await axios.post(
        "https://hotel-booking-app-api.onrender.com/api/hotels",
        newhotel
      );

      navigate("/hotels");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.new}>
      <Sidebar />
      <div className={styles.newContainer}>
        <div className={styles.top}>
          <h2>{title}</h2>
        </div>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <h4>Upload Image:</h4>

            <label htmlFor="photos">
              <div className={styles.leftImgs}>
                <img
                  src={files ? URL.createObjectURL(files[0]) : ImgPlaceholder}
                  alt=""
                />

                <img
                  src={files ? URL.createObjectURL(files[1]) : ImgPlaceholder}
                  alt=""
                />
              </div>

              <div className={styles.rightImgs}>
                <img
                  src={files ? URL.createObjectURL(files[2]) : ImgPlaceholder}
                  alt=""
                />

                <img
                  src={files ? URL.createObjectURL(files[3]) : ImgPlaceholder}
                  alt=""
                />
              </div>
            </label>
            <input
              type="file"
              id="photos"
              multiple
              onChange={(e) => setFiles(e.target.files)}
              style={{ display: "none" }}
            />
          </div>

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

                <div className={`${styles.formInput}`}>
                  <label>Featured</label>
                  <br />
                  <select id="featured" onChange={handleChange}>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select>
                </div>

                <div className={`${styles.formInput} ${styles.selectRooms}`}>
                  <label>Rooms</label>
                  <br />
                  <select id="rooms" multiple onChange={handleSelect}>
                    {loading
                      ? "loading"
                      : data &&
                        data.map((room) => (
                          <option key={room._id} value={room._id}>
                            {room.title}
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

export default NewHotel;
