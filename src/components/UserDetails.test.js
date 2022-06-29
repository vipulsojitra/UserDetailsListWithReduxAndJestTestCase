// import renderer from "react-test-renderer";
import { Button, Dialog, TextField } from "@mui/material";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { UserDetails } from "./UserDetails";

Enzyme.configure({ adapter: new Adapter() });
let data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
  },
];
const initialProps = {
  usersList: jest.fn(),
  usersDelete: jest.fn(),
  usersUpdate: jest.fn(),
  Data: { userList: data },
};
describe("UserDetails", () => {
  it("Component Render", () => {
    const component = shallow(<UserDetails {...initialProps} />);

    expect(component).toMatchSnapshot();
  });

  it("Check handleUpdate", () => {
    const component = shallow(<UserDetails {...initialProps} />);

    expect(component.find(Button)).toHaveLength(3);
    component.find("#updateBtn").props().onClick();
    expect(initialProps.usersUpdate).toHaveBeenCalled();
    expect(component.find(Dialog).props().open).toEqual(false);
  });
  it("Check handleEdit", () => {
    const component = shallow(<UserDetails {...initialProps} />);

    expect(component.find(Button)).toHaveLength(3);
    component.find("#editBtn").props().onClick();
    expect(component.find("#name").props().value).toEqual(data[0].name);
  });
  it("Check handleDelete", () => {
    const component = shallow(<UserDetails {...initialProps} />);

    expect(component.find(Button)).toHaveLength(3);
    component.find("#deleteBtn").props().onClick();
    expect(initialProps.usersDelete).toHaveBeenCalled();
  });

  it("Check onChange for name", () => {
    const component = shallow(<UserDetails {...initialProps} />);

    expect(component.find(TextField)).toHaveLength(6);

    let e = {
      target: {
        id: "name",
        value: "abc",
      },
    };
    component.find("#name").props().onChange(e);
    expect(component.find("#name").props().value).toEqual("abc");
  });

  it("Check onChange for username", () => {
    const component = shallow(<UserDetails {...initialProps} />);

    expect(component.find(TextField)).toHaveLength(6);

    let e = {
      target: {
        id: "username",
        value: "abc",
      },
    };

    component.find("#username").props().onChange(e);
    expect(component.find("#username").props().value).toEqual("abc");
  });

  it("Check onChange for email", () => {
    const component = shallow(<UserDetails {...initialProps} />);

    expect(component.find(TextField)).toHaveLength(6);

    let e = {
      target: {
        id: "email",
        value: "abc",
      },
    };

    component.find("#email").props().onChange(e);
    expect(component.find("#email").props().value).toEqual("abc");
  });

  it("Check onChange for city", () => {
    const component = shallow(<UserDetails {...initialProps} />);

    expect(component.find(TextField)).toHaveLength(6);

    let e = {
      target: {
        id: "city",
        value: "abc",
      },
    };

    component.find("#city").props().onChange(e);
    expect(component.find("#city").props().value).toEqual("abc");
  });

  it("Check onChange for zipcode", () => {
    const component = shallow(<UserDetails {...initialProps} />);

    expect(component.find(TextField)).toHaveLength(6);

    let e = {
      target: {
        id: "zipcode",
        value: "123",
      },
    };

    component.find("#zipcode").props().onChange(e);
    expect(component.find("#zipcode").props().value).toEqual("123");
  });

  it("Check onChange for street", () => {
    const component = shallow(<UserDetails {...initialProps} />);

    expect(component.find(TextField)).toHaveLength(6);

    let e = {
      target: {
        id: "street",
        value: "abc",
      },
    };
    component.find("#street").props().onChange(e);
    expect(component.find("#street").props().value).toEqual("abc");
  });

  it("Check modal onClose event", () => {
    const component = shallow(<UserDetails {...initialProps} />);

    component.find(Dialog).props().onClose();
    expect(component.find(Dialog).props().open).toEqual(false);
  });
});
