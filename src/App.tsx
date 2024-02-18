import { Routes, Route } from "react-router-dom";
import { Dashboard, Home, Login, SignUp } from "./pages";
//import { AuthWrapper, PrivateWrapper } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" /*element={<AuthWrapper />}*/>
        <Route index Component={Home} />
      </Route>
      <Route
        path="/login"
        element={
          <Login />
          /* <PrivateWrapper>
            <Login />
          </PrivateWrapper>*/
        }
      />
      <Route
        path="/sign-up"
        element={
          <SignUp />
          /*<PrivateWrapper>
            <SignUp />
          </PrivateWrapper>*/
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
