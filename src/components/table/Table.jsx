import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/slices/table.slice";
import "./Table.scss";

const Table = () => {
  const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
        console.log(user.users, 'asssd');
    },[dispatch, user.users])
    
  return (
      <div className="tb-wrapper">
      {!user.isLoading && (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {user.isLoading && user.users.length ? (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>city</th>
              <th>street</th>
              <th>zipcode</th>
            </tr>
          </thead>
          <tbody>
         
         
          </tbody>
        </table>
        ) : null}
        </div>
  );
};

export default Table;
