import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./log-and-reg/Login";
import Register from "./log-and-reg/Register";
import LadingPage from "./User/LadingPage";
import Navigation from "./User/Navigation";
import Mycomplaints from "./User/Mycomplaints";
import About from "./User/About";
import Form from "./User/Form";
import Managment from "./User/Managment";
import Complaint from "./admin/Complaint";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/manage" element={<Managment/>}/>
        <Route path="/" element={<Navigation />}>
          <Route index element={<LadingPage />} />
          <Route path="/complaint" element={<Mycomplaints />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/form" element={<Form></Form>}/>
        </Route>
        <Route path="/adcom" element={<Complaint/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
