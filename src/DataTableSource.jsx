import styles from "./Components/DataTable/DataTable.module.scss";

export const userColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "user",
    headerName: "User",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={styles.cellWithImg}>
          <img
            className={styles.cellImg}
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },

  {
    field: "email",
    headerName: "Email",
    width: 200,
  },

  {
    field: "country",
    headerName: "Country",
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    width: 130,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 180,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },

  {
    field: "type",
    headerName: "Type",
    width: 130,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "title",
    headerName: "Title",
    width: 180,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 350,
  },
  {
    field: "price",
    headerName: "Price",
    width: 120,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 150,
  },
];
