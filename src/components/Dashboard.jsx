import UserList from "./UserList";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <section className="dashboard-box">
        <section>
          <div className="box">Box1</div>
          <div className="box">Box2</div>
        </section>
        <section>
          <div className="box">Box3</div>
          <div className="box">Box4</div>
        </section>
      </section>
      <UserList />
    </div>
  );
};

export default Dashboard;
