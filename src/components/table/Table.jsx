import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/slices/table.slice";
import "./Table.scss";

const Table = () => {
  const { users, isLoading } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())

  }, [dispatch])

  return (
    <div className="tb-wrapper">
      {isLoading && (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {!isLoading && users.length ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Street</th>
              <th>Zipcode</th>
            </tr>
          </thead>
          <tbody>
              {
               users.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address.city}</td>
                  <td>{item.address.street}</td>
                  <td>{item.address.zipcode}</td>
                </tr>
               ))
              }

          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default Table;
