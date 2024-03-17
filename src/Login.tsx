import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-react/dist/esm/common/theming/defaultThemes";
import { useState } from "react";
import Dialog from "./Dialog";
import { supaClient } from "./supa-client";

export const setReturnPath = () => {
  localStorage.setItem("returnPath", window.location.pathname);
};

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState<"sign_in" | "sign_up">("sign_in");
  return (
    <>
      <div>
        <button
          onClick={() => {
            setShowModal(true);
            setAuthMode("sign_in");
            setReturnPath();
          }}
        >
          Login
        </button>
        <span> or </span>
        <button
          onClick={() => {
            setShowModal(true);
            setAuthMode("sign_up");
            setReturnPath();
          }}
        >
          Sign Up
        </button>
      </div>
      <Dialog
        open={showModal}
        dialogStateChange={(open) => setShowModal(open)}
        contents={
          <>
            {
              <Auth
                supabaseClient={supaClient}
                view={authMode}
                appearance={{
                  theme: ThemeSupa,
                  className: {
                    container: "login-form-container",
                    label: "login-form-label",
                    button: "login-form-button",
                    input: "login-form-input",
                  },
                }}
              />
            }
          </>
        }
      />
    </>
  );
}
