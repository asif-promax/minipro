import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./log-and-reg/Login";
import Register from "./log-and-reg/Register";
import LadingPage from "./LadingPage";
import Navigation from "./Navigation";
import Mycomplaints from "./Mycomplaints";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/" element={<Navigation />}>
          <Route index element={<LadingPage />} />
          <Route path="/complaint" element={<Mycomplaints />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
