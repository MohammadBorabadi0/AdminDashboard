import { users } from "../data/users";

const UserList = () => {
  return (
    <table>
      <thead>
        <th>Image</th>
        <th>ID</th>
        <th>Name</th>
        <th>Status</th>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              <img src={user.image} alt={user.name} />
            </td>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>
              <span
                className={user.status === "active" ? "active" : "un-active"}
              >
                {user.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
