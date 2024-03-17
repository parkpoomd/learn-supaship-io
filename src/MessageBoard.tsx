import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "./App";
import Login from "./Login";

export default function MessageBoard() {
  const userProfile = useContext(UserContext);
  return (
    <div>
      <Link to="/1">
        <h2>Message Board</h2>
      </Link>
      {userProfile.session ? (
        <></>
      ) : (
        <h2>
          Yo Dawg. you gotta <Login /> to join in the discussion.
        </h2>
      )}
      <Outlet />
    </div>
  );
}
