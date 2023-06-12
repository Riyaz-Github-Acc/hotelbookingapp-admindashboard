import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// MUI Data Table
import { DataGrid } from "@mui/x-data-grid";

import useFetch from "../../Hooks/useFetch";

// CSS
import styles from "./DataTable.module.scss";

const DataTable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const { data, loading, error, reFetch } = useFetch(
    `https://hotel-booking-app-api.onrender.com/api/${path}`
  );

  useEffect(() => {
    setList(data);
  }, [data]);

  useEffect(() => {
    reFetch();
  }, [location]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://hotel-booking-app-api.onrender.com/api/${path}/${id}`
      );
      setList(list.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: "250",
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            {/* <Link to="/users/test">
              <div className={styles.viewButton}>View</div>
            </Link> */}
            <div
              className={styles.deleteButton}
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className={styles.dataTable}>
      <div className={styles.addButton}>
        <Link to={`/${path}/new`}>
          <button>+ Add New</button>
        </Link>
      </div>

      <DataGrid
        className={styles.datagrid}
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        rowHeight={60}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default DataTable;
