import "./App.css";
import UserDetails from "./components/UserDetails";
import { Provider } from "react-redux";
import { store } from "./state/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserDetails />
      </Provider>
    </div>
  );
}

export default App;
