import React from "react";

const AuthContext = React.createContext({
  authenticated: false,
  login: () => {},
});

export default AuthContext;
