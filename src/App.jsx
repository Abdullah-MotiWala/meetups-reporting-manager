import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/index";
import Signin from "./pages/signin";
import Dashboard from "./pages/organization/dashboard";
import UserListingPage from "./pages/organization/user/listing";
import AddUserPage from "./pages/organization/user/add";

// JS + XML = React
function App() {
  return (
    <Routes>
      <Route path="*" element={<div>404 Not Found</div>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />

      <Route path="/organization">
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="users">
          <Route index element={<UserListingPage />} />
          <Route path="add" element={<AddUserPage />} />
          <Route path=":id" element={<UserListingPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
