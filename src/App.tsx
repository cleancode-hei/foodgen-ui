import { Routes, Route } from "react-router-dom";
import { Home, Login, SignUp } from "./pages";
import { AuthWrapper, PrivateWrapper } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthWrapper />}>
        <Route index Component={Home} />
      </Route>
      <Route
        path="/login"
        element={
          <PrivateWrapper>
            <Login />
          </PrivateWrapper>
        }
      />
      <Route
        path="/sign-up"
        element={
          <PrivateWrapper>
            <SignUp />
          </PrivateWrapper>
        }
      />
    </Routes>
  );
}

export default App;
