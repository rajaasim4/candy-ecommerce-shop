import { Provider } from "react-redux";
import Router from "./Routes/Router";
import { store } from "./ShoppingCart/Store/Store";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
};

export default App;
