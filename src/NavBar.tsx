import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./App";
import Login from "./Login";
import UserMenu from "./UserMenu";

export default function NavBar() {
  const { session } = useContext(UserContext);
  return (
    <>
      <nav className="flex justify-between items-center">
        <Link to="/">
          <img
            className="h-12"
            src="https://supaship.io/supaship_logo_with_text.svg"
            alt="logo"
          />
        </Link>

        <ul>
          <li>
            <Link to="/1">message board</Link>
          </li>
          <li>{session?.user ? <UserMenu /> : <Login />}</li>
        </ul>
      </nav>
    </>
  );
}
