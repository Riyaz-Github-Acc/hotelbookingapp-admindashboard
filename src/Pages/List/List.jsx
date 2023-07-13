import DataTable from "../../Components/DataTable/DataTable";
import Sidebar from "../../Components/Sidebar/Sidebar";
import styles from "./List.module.scss";

const List = ({ columns }) => {
  return (
    <div className={styles.list}>
      <Sidebar />

      <div className={styles.listContainer}>
        <DataTable columns={columns} />
      </div>
    </div>
  );
};

export default List;
