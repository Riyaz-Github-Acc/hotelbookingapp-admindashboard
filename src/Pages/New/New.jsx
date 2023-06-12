import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Image
import ImgPlaceholder from "../../assets/images/single/img-placeholder.png";

import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

import styles from "./New.module.scss";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "HotelBookingApp");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/ds60krqho/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newUser = {
        ...info,
        img: url,
      };

      await axios.post(
        "https://hotel-booking-app-api.onrender.com/api/auth/register",
        newUser
      );

      navigate("/users");
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

            <label htmlFor="img_file">
              <img
                src={file ? URL.createObjectURL(file) : ImgPlaceholder}
                alt=""
              />
            </label>
            <input
              type="file"
              id="img_file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />

            <input
              type="file"
              id="img_file"
              onChange={(e) => setFile(e.target.files[1])}
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
              </div>

              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
