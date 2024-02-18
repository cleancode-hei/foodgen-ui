import { Routes, Route } from "react-router-dom";
import { Dashboard, Login, SignUp } from "./pages";
import { RandomeMealsPage } from "./pages/random-meals";
//import { AuthWrapper, PrivateWrapper } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" /*element={<AuthWrapper />}*/>
        <Route index Component={Login} />
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
      <Route
        path="/random-meal"
        element={
          <RandomeMealsPage />
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
