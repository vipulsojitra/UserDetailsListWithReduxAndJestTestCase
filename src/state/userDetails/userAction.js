import { USER_DETAILS, USER_DELETE, USER_UPDATE } from "./userTypes";

export const UserListAction = (data) => {
  return {
    type: USER_DETAILS,
    payload: data,
  };
};

export const UserDeleteAction = (data) => {
  return {
    type: USER_DELETE,
    payload: data,
  };
};

export const UserUpdateAction = (data) => {
  return {
    type: USER_UPDATE,
    payload: data,
  };
};
