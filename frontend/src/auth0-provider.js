import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-be67vnz15ljwc5ll.us.auth0.com";
const clientId = "j4tpnnZ9C3zbkGWM6vrg4X9ajaMZKsSI";
const audience = "https://api.example.com";

const Auth0ProviderWithHistory = ({ children }) => {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
