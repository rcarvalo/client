import UserContext from "./components/AccountContext";
import ToggleColorMode from "./components/ToggleColorMode";
import Login from "./pages/login/Login";

function App() {
  return (
    <UserContext>
      <Login />
      <ToggleColorMode />
    </UserContext>
  );
}

export default App;