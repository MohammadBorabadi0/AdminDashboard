import UserList from "./UserList";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";

const Dashboard = ({ active, setActive }) => {
  return (
    <div className="dashboard">
      <section className="dashboard-header">
        <HiOutlineBars3BottomLeft onClick={() => setActive(!active)} />
        <h1>Dashboard</h1>
      </section>
      <section className="dashboard-box">
        <div className="box">Box1</div>
        <div className="box">Box2</div>
        <div className="box">Box3</div>
        <div className="box">Box4</div>
      </section>
      <UserList />
    </div>
  );
};

export default Dashboard;
