"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";

// components
import GoogleOAuthLogin from "./GoogleOAuthLogin";

const GoogleOAuth = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_KEY;

  return (
    <>
      {clientId && (
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleOAuthLogin />
        </GoogleOAuthProvider>
      )}
    </>
  );
};

export default GoogleOAuth;
