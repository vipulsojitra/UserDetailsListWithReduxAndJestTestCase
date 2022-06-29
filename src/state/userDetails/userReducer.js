import { USER_DETAILS, USER_DELETE, USER_UPDATE } from "./userTypes";
const initialState = {
  userList: {},
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        userList: action.payload,
      };
    case USER_DELETE:
      return {
        ...state,
        userList: state.userList.filter((item) => {
          return item.id != action.payload;
        }),
      };
    case USER_UPDATE:
      return {
        ...state,
        userList: state.userList.map((item) => {
          var temp = Object.assign({}, item);
          if (temp.id == action.payload.id) {
            temp.name = action.payload.name;
            temp.username = action.payload.username;
            temp.email = action.payload.email;
            temp.address.street = action.payload.address.street;
            temp.address.city = action.payload.address.city;
            temp.address.zipcode = action.payload.address.zipcode;
          }
          return temp;
        }),
      };
    default:
      return state;
  }
};
export default userListReducer;
