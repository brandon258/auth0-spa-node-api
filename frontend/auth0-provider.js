import { Auth0Provider } from "@auth0/auth0-react";

const domain = "YOUR_DOMAIN.auth0.com";
const clientId = "YOUR_CLIENT_ID";
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
