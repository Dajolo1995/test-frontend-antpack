import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import HomeId from "../views/HomeId";
import Auth from "../views/Auth";
import Users from "../views/Users";
import Data from "../views/Data";
import CreateData from "../components/dataAuth/CreateData";
import Profile from "../views/Profile";
import { PrivateApp } from "./PrivateRouter";

function Index() {
  return (
    <Routes>
      <Route key="home" path="/" element={<Home />}></Route>

      {/* <Route
        path="/"
        element={
          <PrivateApp>
            <Home />
          </PrivateApp>
        }
      ></Route> */}

      <Route key="login" path="/auth" element={<Auth />}></Route>
      <Route key="homeId" path="/:id" element={<HomeId />}></Route>
      <Route
        key="homeId"
        path="/users"
        element={
          <PrivateApp>
            <Users />
          </PrivateApp>
        }
      ></Route>
      <Route
        key="homeId"
        path="/data"
        element={
          <PrivateApp>
            <Data />
          </PrivateApp>
        }
      ></Route>
      <Route
        key="homeId"
        path="/create-data"
        element={
          <PrivateApp>
            <CreateData />
          </PrivateApp>
        }
      ></Route>
      <Route
        key="homeId"
        path="/profile"
        element={
          <PrivateApp>
            <Profile />
          </PrivateApp>
        }
      ></Route>
    </Routes>
  );
}

export default Index;
