import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./log-and-reg/Login";
import Register from "./log-and-reg/Register";
import LandingPage from "./User/LadingPage"; // Fixed typo
import Navigation from "./User/Navigation";
import MyComplaints from "./User/Mycomplaints"; // Fixed naming style
import About from "./User/About";
import Form from "./User/Form";
import Management from "./User/Managment"; // Fixed typo in name
import Complaint from "./admin/Complaint";
import Sidebar from "./admin/Sidebar";
import User from "./admin/User";
import ComplaintManagement from "./admin/Complaintmanagment"; // Fixed typo
import Dashboard from "./admin/Dashboard";
import { Outlet } from "react-router-dom";

// const NavigationLayout = () => (
//   <>
//     <Navigation />
//     <Outlet />
//   </>
// );

// const SidebarLayout = () => (
//   <>
//     <Sidebar />
//     <Outlet />
//   </>
// );

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/manage" element={<Management />} />
        {/* <Route path="/form" element={<Form />} /> */}

        {/* User Routes */}
        <Route path="/landing" element={<Navigation />}>
          <Route index element={<LandingPage />} />
          <Route path="complaint" element={<MyComplaints />} />
          <Route path="about" element={<About />} />
          <Route path="form" element={<Form />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="Complaint" element={<Complaint />} />
          <Route path="user" element={<User />} />
          <Route path="complaintmanage" element={<ComplaintManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
