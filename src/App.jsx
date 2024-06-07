import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetailsPage from "./page/UserDetailsPage";
import Home from "./page/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
            <Home/>
            }
          />
          <Route path="/user/:userId" element={<UserDetailsPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
