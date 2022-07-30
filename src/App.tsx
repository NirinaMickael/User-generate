import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AuthContext from "./Hooks/AuthContext";
import { Dashboard } from "./Pages";
import { PrivateRoute, PublicRoute } from "./Routes";

function App() {
  const [Auth, setAuthentification] = useState(true);
  const editAuth = () => {
    setAuthentification(Auth);
  };
  return (
    <AuthContext.Provider value={{ auth: Auth, setAuth: editAuth }}>
      <PublicRoute />
      <Routes>
        <Route
          path="dashboard"
          element={
            <PrivateRoute
              isAuthenticated={Auth}
              authenticationPath="../"
              outlet={<Dashboard />}
            />
          }
        />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
