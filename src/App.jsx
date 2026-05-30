import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/signup/index";
import Signin from "./pages/signin";
import Dashboard from "./pages/organization/dashboard";
import UserListingPage from "./pages/organization/user/listing";

// JS + XML = React
function App() {
  const a = 1;
  const b = 2;
  const c = 3;

  return (
    <Routes>
      <Route path="*" element={<div>404 Not Found</div>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />

      <Route path="/organization">
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="users">
          <Route index element={<UserListingPage />} />
          <Route path=":id" element={<UserListingPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
