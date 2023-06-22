import { GoogleLogin } from "@react-oauth/google";

const GoogleOAuthLogin = () => {
  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse.credential);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </>
  );
};

export default GoogleOAuthLogin;
