import ShowUsers from "./pages/ShowUsers";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div>
      <h1>CONTEXT API EXAMPLE!</h1>
      <UserContextProvider>
        <ShowUsers />
      </UserContextProvider>
    </div>
  );
}
export default App;
