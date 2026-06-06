import { useNavigate } from "react-router-dom";
import { USER_LIST } from "../../../../constants/dummyData";
import "./style.css";

export default function UserListingPage() {
  const navigate = useNavigate();
  function addClickHandler(){
    navigate("add")
  }
  return (
    <>
      <button onClick={addClickHandler}>Add User</button>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>

        {USER_LIST.map((user) => {
          const { id, email, name } = user;
          return (
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
