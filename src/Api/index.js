import axios from "axios";
import {
  UserListAction,
  UserDeleteAction,
  UserUpdateAction,
} from "../state/userDetails/userAction";

export const usersList = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const { data } = res;
        dispatch(UserListAction(data));
      })
      .catch(async (err) => {
        console.log(err);
      });
  };
};

export const usersDelete = (id) => {
  return (dispatch) => {
    dispatch(UserDeleteAction(id));
  };
};

export const usersUpdate = (id) => {
  return (dispatch) => {
    dispatch(UserUpdateAction(id));
  };
};
