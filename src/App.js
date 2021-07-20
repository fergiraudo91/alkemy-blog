import { Provider } from "react-redux";
import { Home } from "./pages/Home/Home";
import { LoginScreen } from "./pages/Login/LoginScreen";
import { store } from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
